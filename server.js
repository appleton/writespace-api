'use strict';

var path = require('path');
var crypto = require('crypto');

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

function generateNotesDbName(email) {
  email = (email || '');
  return 'notes_' + crypto.createHash('sha1').update(email).digest('hex');
}

app.post('/users', function(req, res) {
  req.accepts('application/json');

  // TODO: re-add express-validation and provide consistent error messages
  if (!req.body.password || req.body.password === '') {
    return res.json(422, { errors: ['Password cannot be blank']});
  }

  var user = {
    _id: 'org.couchdb.user:' + req.body.name,
    name: req.body.name,
    type: 'user',
    roles: [],
    password: req.body.password
  };

  user.notes_db = generateNotesDbName(user.name);

  // TODO: this should be refactored to use promises
  nano.db.use('_users').insert(user, function(err, userBody) {
    if (err) return res.json(422, { errors: [err.message]});

    nano.db.create(user.notes_db, function(err, notesBody) {
      if (err) {
        console.log('User db creation error: ', err, notesBody);
        return res.json(422, { errors: [err.message]});
      }

      var notes = nano.db.use(user.notes_db);
      var securityDesign = { readers: { names: [ user.name ], roles: [] } };

      notes.insert(securityDesign, '_security', function(err, securityBody) {
        if (err) {
          console.log('User db security update error: ', err, securityBody);
          return res.json(422, { errors: [err.message]});
        }

        res.json(201, userBody);
      });
    });
  });
});

module.exports = app;
