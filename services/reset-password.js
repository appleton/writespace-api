'use strict';

var crypto = require('crypto');
var Q = require('q');
var nano = require('../db/couch');

var TOKENS_DB = 'password_reset_tokens';

var tokens = nano.db.use(TOKENS_DB);
var users = nano.db.use('_users');
var adminUser = process.env.COUCH_URL.split(/https?:\/\//)[1].split(':')[0];

// Create the db and set security permissions if necessary
function createTokensDb() {
  return Q.ninvoke(nano.db, 'list').then(function(res) {
    var exists = res.indexOf(TOKENS_DB) !== -1;
    if (exists) return;
    return Q.ninvoke(nano.db, 'create', TOKENS_DB);
  }).then(function() {
    var securityDesign = { readers: { names: [adminUser], roles: [] } };
    return Q.ninvoke(tokens, 'insert', securityDesign, '_security');
  });
}

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
    return createTokensDb();
  }).then(function() {
    return newToken();
  }).then(function(token) {
    var tokenDocument = {
      _id: token,
      user: 'org.couchdb.user:' + email,
      createdAt: (new Date()).toString()
    };

    return Q.ninvoke(tokens, 'insert', tokenDocument);
  });
}

module.exports = {
  generateFor: generateFor
};
