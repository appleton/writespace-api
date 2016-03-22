'use strict';

var Mailer = require('./mailer');

module.exports = {
  passwordReset: function(to, data) {
    return new Mailer({
      to: to,
      subject: 'Writespace password reset',
      data: data,
      template: 'password-reset'
    });
  }
};
