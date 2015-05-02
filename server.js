'use strict';

var path = require('path');

var express = require('express');
var expressValidator = require('express-validator');
var cors = require('cors');
var dotenv = require('dotenv');
dotenv.load();

var userValidation = require('./middleware/user-validator');
var createUser = require('./services/create-user');
var passwordReset = require('./services/password-reset');
var userMailer = require('./mailers/user-mailer');
var adminMailer = require('./mailers/admin-mailer');

var app = express();

// App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.use(express.compress());
  app.use(express.logger('dev'));
  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(expressValidator());
  app.use(app.router);
});

// Environment specific app configuration
app.configure('development', function(){
  app.use(express.errorHandler());
});

function formatError(error) {
  return { errors: [{ msg: error.message }] };
}

app.post('/users', userValidation, function(req, res) {
  req.accepts('application/json');

  createUser(req.body).then(function(user) {
    res.json(201, user);

    adminMailer.newUser(process.env.ADMIN_EMAIL, {
      newUser: req.body.email
    }).deliver();
  }).catch(function(err) {
    console.log('User creation error: ', err);
    res.json(422, formatError(err));
  });
});

app.options('/passwords', cors({ credentials: true }));

app.post('/passwords', function(req, res) {
  req.accepts('application/json');

  var email = req.body.email;

  passwordReset.generateFor(email).then(function(token) {
    var link = 'http://app.notesy.co/user/password/edit?token=' + token;
    userMailer.passwordReset(email, { resetLink: link }).deliver();

    res.json(201, { msg: 'A password reset link has been sent to ' + email });
  }).catch(function(err) {
    res.json(422, formatError(err));
  });
});

app.put('/passwords', function(req, res) {
  req.accepts('application/json');

  passwordReset.reset(req.body).then(function(user) {
    res.json(201, user);
  }).catch(function(err) {
    res.json(422, formatError(err));
  });
});

module.exports = app;
