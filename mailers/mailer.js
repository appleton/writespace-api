'use strict';

var fs = require('fs');
var _ = require('lodash');
var Mailgun = require('mailgun-js');
var client = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

function Mailer(opts) {
  if (!_.isArray(opts.to)) opts.to = [opts.to];
  this.to = opts.to;
  this.subject = opts.subject;
  this.data = opts.data;
  this.template = opts.template;
}

Mailer.prototype.deliver = function(cb) {
  var self = this;

  this.render(function(err, body) {
    client.messages().send({
      from: 'Scribly <' + process.env.EMAIL_FROM + '>',
      to: self.to,
      subject: self.subject,
      text: body
    }, cb);
  });
};

Mailer.prototype.render = function(cb) {
  var self = this;
  var templatePath = __dirname + '/templates/' + this.template + '.tmpl';

  fs.readFile(templatePath, function(err, template) {
    if (err) {
      console.log('Error reading email template ' + self.template, err);
      cb(err);
    }
    cb(null, _.template(template, self.data));
  });
};

module.exports = Mailer;
