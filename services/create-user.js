'use strict';

var crypto = require('crypto');
var Q = require('q');
var nano = require('../db/couch');
var users = nano.db.use('_users');

function generateNotesDbName(email) {
  email = (email || '');
  return 'notes_' + crypto.createHash('sha1').update(email).digest('hex');
}

function createUser(user) {
  return Q.ninvoke(users, 'insert', user).catch(function(err) {
    // Retry on failure unless the user already exists
    if (err.status_code !== 409) return createUser(user);

    err.message = 'User already exitsts';
    throw err;
  });
}

function createNotesDb(dbName) {
  return Q.ninvoke(nano.db, 'create', dbName).catch(function() {
    return createNotesDb(dbName);
  });
}

function setNotesDbPermissions(user) {
  var notes = nano.use(user.notes_db);
  var securityDesign = { readers: { names: [ user.name ], roles: [] } };

  return Q.ninvoke(notes, 'insert', securityDesign, '_security')
    .catch(function() {
      return setNotesDbPermissions(user);
    });
}

module.exports = function(params) {
  var user = {
    _id: 'org.couchdb.user:' + params.email,
    name: params.email,
    type: 'user',
    roles: [],
    password: params.password
  };

  user.notes_db = generateNotesDbName(user.name);

  return createUser(user).then(function() {
    return createNotesDb(user.notes_db);
  }).then(function() {
    return setNotesDbPermissions(user);
  });
};
