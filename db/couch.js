'use strict';

var nano = require('nano');
var connection = nano(process.env.COUCH_DB_URL);
var userValidation = require('./validators/user.js');

var users = connection.use('_users');

users.get('_design/user_validate', function(err, body) {
  var validationDesign = { validate_doc_update: userValidation.toString() };

  if (body && body._rev) validationDesign._rev = body._rev;

  users.insert(validationDesign, '_design/user_validate', function(err) {
    if (err) throw err;
  });
});


module.exports = connection;
