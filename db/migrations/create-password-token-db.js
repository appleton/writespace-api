'use strict';

// Create password_reset_tokens db and set security permissions if necessary

var Q = require('q');
var nano = require('../couch');

var TOKENS_DB = 'password_reset_tokens';
var tokens = nano.db.use(TOKENS_DB);
var adminUser = process.env.COUCH_URL.split(/https?:\/\//)[1].split(':')[0];

console.log('Checking if "' + TOKENS_DB + '" exists');
Q.ninvoke(nano.db, 'list').then(function(res) {
  var exists = res[0].indexOf(TOKENS_DB) !== -1;
  if (exists) {
    console.log('"' + TOKENS_DB + '" already exists');
    return;
  }

  console.log('Creating "' + TOKENS_DB + '" database');
  return Q.ninvoke(nano.db, 'create', TOKENS_DB);
}).then(function() {
  console.log('Created "' + TOKENS_DB + '" database');
  console.log('Setting security design for "' + TOKENS_DB + '" database');

  var securityDesign = { readers: { names: [adminUser], roles: [] } };
  return Q.ninvoke(tokens, 'insert', securityDesign, '_security');
}).then(function() {
  console.log('Set security design for "' + TOKENS_DB + '" database');
  console.log('Done!');
});
