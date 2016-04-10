'use strict';

var crypto = require('crypto');
var Q      = require('q');
var qretry = require('../../helpers/qretry');
var nano   = require('../../../db/couch');
var users  = nano.db.use('_users');

var RETRY_POLICY = {
  maxRetry: 5,
  interval: 200,
  intervalMultiplicator: 1
};

function generateNotesDbName(email) {
  email = (email || '');
  return 'notes_' + crypto.createHash('sha1').update(email).digest('hex');
}

// Insert a new user document.
// On failure:
//   - if it's a duplicate, error immediately
//   - if it fails for some other reason, retry according to the policy
function createUser(user) {
  function create(user) {
    return Q.ninvoke(users, 'insert', user);
  }

  return create(user).catch(function(err) {
    // Start retrying on failure unless the user already exists
    if (err.status_code !== 409) {
      return qretry(function() { return create(user); }, RETRY_POLICY);
    }

    // Bail immediately if user already exists
    err.message = 'User already exists';
    throw err;
  });
}

function createNotesDb(dbName) {
  return qretry(function() {
    return Q.ninvoke(nano.db, 'create', dbName);
  }, RETRY_POLICY).catch(function(err) {
    console.log('Error creating notes db: ', err);
    err.message = 'Sorry, there was an error creating your account. ' +
                  'We are looking into it';
    throw err;
  });
}

function setNotesDbPermissions(user) {
  var notes = nano.use(user.notes_db);
  var securityDesign = { readers: { names: [ user.name ], roles: [] } };

  return qretry(function() {
    return Q.ninvoke(notes, 'insert', securityDesign, '_security')
      .then(function() {
        delete user.password;
        return user;
      });
  }, RETRY_POLICY).catch(function(err) {
    console.log('Error setting security policy: ', err);
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
