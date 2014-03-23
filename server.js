'use strict';

var path = require('path');

var express = require('express');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
dotenv.load();

var userValidation = require('./middleware/user-validator');
var createUser = require('./services/create-user');
var passwordReset = require('./services/password-reset');
var userMailer = require('./mailers/user-mailer');

var app = express();

// App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.use(express.compress());
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(expressValidator());
  app.use(app.router);
  app.use(require('./middleware/serve-ng'));
  app.use(function(req, res, next) {
    if (path.extname(req.path) === 'manifest') {
      res.header('Content-Type', 'text/cache-manifest');
    }
    next();
  });
});

// Environment specific app configuration
app.configure('development', function(){
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, 'tmp')));
});

app.configure('production', function(){
  // Far future caching for js and css
  var oneYearInSeconds = 31536000;

  app.use(function(req, res, next) {
    var ext = path.extname(req.path);
    if (ext === '.js' || ext === '.css') {
      res.setHeader('Cache-Control', 'public, max-age=' + oneYearInSeconds);
    }
    return next();
  });

  app.use(express.static(path.join(__dirname, 'dist')));
});

function formatError(error) {
  return { errors: [{ msg: error.message }] };
}

app.post('/users', userValidation, function(req, res) {
  req.accepts('application/json');

  createUser(req.body).then(function(user) {
    res.json(201, user);
  }).catch(function(err) {
    console.log('User creation error: ', err);
    res.json(422, formatError(err));
  });
});

app.post('/users/passwords', function(req, res) {
  req.accepts('application/json');

  var email = req.body.email;

  passwordReset.generateFor(email).then(function(token) {
    var link = 'http://app.notesy.co/users/passwords/edit/' + token;
    userMailer.passwordReset(email, { resetLink: link }).deliver();

    res.json(201, { msg: 'A password reset link has been sent to ' + email });
  }).catch(function(err) {
    res.json(422, formatError(err));
  });
});

app.post('/users/passwords/edit', function(req, res) {
  req.accepts('application/json');

  passwordReset.reset(req.body).then(function() {
    res.json(201, { msg: 'Password updated successfully' });
  }).catch(function(err) {
    res.json(422, formatError(err));
  });
});

module.exports = app;
