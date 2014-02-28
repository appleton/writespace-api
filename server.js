'use strict';

var path = require('path');

var express = require('express');
var dotenv = require('dotenv');
dotenv.load();

var nano = require('./db/couch');
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

app.post('/users', function(req, res) {
  req.accepts('application/json');

  nano.db.use('_users').insert({
    _id: 'org.couchdb.user:' + req.body.email,
    name: req.body.email,
    type: 'user',
    roles: [],
    password: req.body.email
  }, function(err, body) {
    if (err) return res.json(err.status_code, { message: err.message });
    res.json(201, body);
  });
});

module.exports = app;
