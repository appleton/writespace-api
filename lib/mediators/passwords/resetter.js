'use strict';

var crypto = require('crypto');
var Q      = require('q');
var nano   = require('../../../db/couch');

var users  = nano.db.use('_users');
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

    return Q.ninvoke(tokens, 'insert', tokenDocument).then(function(res) {
      var doc = res[0];
      return doc.id;
    });
  });
}

function validateResetCutoff(token) {
  return Q.ninvoke(tokens, 'get', token).then(function(resp) {
    var doc = resp[0];

    // Reset tokens are only valid for an hour
    var createdAt = new Date(doc.createdAt);
    var cutoff = new Date(createdAt.getTime() + (1 * 60 * 60 * 1000));
    var now = new Date();

    if (now > cutoff) {
      throw new Error('Password reset token has expired. ' +
                      'Please reset your password within an hour');
    }
    return doc;
  }).catch(function(err) {
    err.message = 'Invalid reset token';
    throw err;
  });
}

function changePasswordFor(userId, password) {
  return Q.ninvoke(users, 'get', userId).then(function(resp) {
    var doc = resp[0];
    doc.password = password;
    return Q.ninvoke(users, 'insert', doc);
  });
}

function deleteToken(tokenDocument) {
  return Q.ninvoke(tokens, 'destroy', tokenDocument._id, tokenDocument._rev);
}

function reset(params) {
  return validateResetCutoff(params.token).then(function(tokenDocument) {
    return changePasswordFor(tokenDocument.user, params.password).then(() => {
      return deleteToken(tokenDocument);
    }).then(function() {
      return { email: tokenDocument.user.split('org.couchdb.user:')[1] };
    });
  });
}

module.exports = {
  generateFor: generateFor,
  reset: reset
};
