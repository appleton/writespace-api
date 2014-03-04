'use strict';

// Couch configuration.
//   `gulp deploy:db` to push this and any other designs to couch

function validateUsers(newDoc) {
  function isEmail(field, message) {
    message = message || field + ' is not a valid email';
    var value = newDoc[field] || '';

    if (value.indexOf('@') === -1) throw({ forbidden : message });
  }

  isEmail('name', 'Email is not a valid');
}


module.exports = {
  _id: '_design/user_validate',
  validate_doc_update: validateUsers
};
