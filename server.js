'use strict';

var fs = require('fs');
var path = require('path');

var express = require('express');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
dotenv.load();

var userValidation = require('./middleware/user-validator');
var createUser = require('./services/create-user');

var app = express();

// App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.use(express.compress());
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(expressValidator());
  app.use(app.router);
  app.use(require('./middleware/serve-ng'));
});

// Environment specific app configuration
app.configure('development', function(){
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, 'tmp')));
});

app.configure('production', function(){
  var tenMin = 600;
  app.use(express.static(path.join(__dirname, 'dist'), { maxAge: tenMin }));
});

function formatError(error) {
  return { errors: [{ msg: error.message }] };
}

app.post('/users', userValidation, function(req, res) {
  req.accepts('application/json');

  createUser(req.body).then(function(user) {
    res.json(201, user);
  }).catch(function(err) {
    res.json(422, formatError(err));
  });
});

module.exports = app;
