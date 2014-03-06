'use strict';

var path = require('path');
var crypto = require('crypto');

var express = require('express');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
dotenv.load();

var nano = require('./db/couch');
var userValidation = require('./middleware/user-validator');

var app = express();

// App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
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
  app.use(express.static(path.join(__dirname, 'dist')));
});

function generateNotesDbName(email) {
  email = (email || '');
  return 'notes_' + crypto.createHash('sha1').update(email).digest('hex');
}

function formatError(error) {
  return { errors: [{ msg: error.message }] };
}

app.post('/users', userValidation, function(req, res) {
  req.accepts('application/json');

  var user = {
    _id: 'org.couchdb.user:' + req.body.email,
    name: req.body.email,
    type: 'user',
    roles: [],
    password: req.body.password
  };

  user.notes_db = generateNotesDbName(user.name);

  // TODO: this should be refactored to use promises
  nano.db.use('_users').insert(user, function(err, userBody) {
    if (err) {
      return res.json(422, formatError(err));
    }

    nano.db.create(user.notes_db, function(err, notesBody) {
      if (err) {
        console.log('User db creation error: ', err, notesBody);
        return res.json(422, formatError(err));
      }

      var notes = nano.db.use(user.notes_db);
      var securityDesign = { readers: { names: [ user.name ], roles: [] } };

      notes.insert(securityDesign, '_security', function(err, securityBody) {
        if (err) {
          console.log('User db security update error: ', err, securityBody);
          return res.json(422, formatError(err));
        }

        res.json(201, userBody);
      });
    });
  });
});

module.exports = app;
