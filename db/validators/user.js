'use strict';

module.exports = function(newDoc) {
  function isEmail(field, message) {
    message = message || field + ' is not a valid email';
    var value = newDoc[field] || '';

    if (value.indexOf('@') === -1) throw({ forbidden : message });
  }

  isEmail('name', 'email is not a valid email');
};
