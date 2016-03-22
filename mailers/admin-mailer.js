'use strict';

var Mailer = require('./mailer');

module.exports = {
  newUser: function(to, data) {
    return new Mailer({
      to: to,
      subject: 'Writespace user signup',
      data: data,
      template: 'new-user'
    });
  }
};
