'use strict';

var path = require('path');

var express = require('express');
// var nano = require('nano');

var app = express();

// Environment specific app configuration
app.configure('development', function(){
  app.use(express.errorHandler());
});

// App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(require('./middleware/serve-ng'));
  app.use(express.static(path.join(__dirname, 'dist')));
});

module.exports = app;
