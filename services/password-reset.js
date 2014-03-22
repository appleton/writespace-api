'use strict';

var crypto = require('crypto');
var Q = require('q');
var nano = require('../db/couch');

var users = nano.db.use('_users');
var tokens = nano.db.use('password_reset_tokens');

function newToken() {
  Q.ninvoke(crypto, 'randomBytes', 24).then(function(buffer) {
    var token = buffer.toString('hex');

    // Check if token already exists. Try again if it does.
    return Q.ninvoke(tokens, 'head', token).then(function() {
      return newToken();
    }).catch(function() {
      return token;
    });
  });
}

function checkUserExists(email) {
  return Q.ninvoke(users, 'head', 'org.couchdb.user:' + email)
    .catch(function() {
      throw new Error('No user found for ' + email);
    });
}

function generateFor(email) {
  return checkUserExists(email).then(function() {
    return newToken();
  }).then(function(token) {
    var tokenDocument = {
      _id: token,
      user: 'org.couchdb.user:' + email,
      createdAt: (new Date()).toString()
    };

    return Q.ninvoke(tokens, 'insert', tokenDocument).then(function() {
      return token;
    });
  });
}

module.exports = {
  generateFor: generateFor
};
