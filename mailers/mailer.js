'use strict';

var fs = require('fs');
var _ = require('lodash');
var mandrill = require('mandrill-api/mandrill');
var client = new mandrill.Mandrill(process.env.MANDRILL_API_KEY);

function Mailer(opts) {
  if (!_.isArray(opts.to)) opts.to = [opts.to];
  this.to = opts.to.map(function(email) { return { email: email }; });
  this.subject = opts.subject;
  this.data = opts.data;
  this.template = opts.template;
}

Mailer.prototype.deliver = function(cb) {
  var self = this;

  this.render(function(err, body) {
    client.messages.send({
      message: {
        text: body,
        to: self.to,
        subject: self.subject,
        from_email: process.env.EMAIL_FROM,
        from_name: 'scribly'
      }
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
