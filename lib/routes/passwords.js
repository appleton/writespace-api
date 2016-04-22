const express = require('express');
const router  = new express.Router();

const bodyParser = require('body-parser');
const cors       = require('cors');

const passwordReset = require('../mediators/passwords/resetter');
const userMailer    = require('../mailers/user-mailer');
const formatError   = require('../helpers/format-error');

router.options('/passwords', cors({ credentials: true }));

router.post('/passwords', bodyParser.json(), (req, res) => {
  req.accepts('application/json');

  var email = req.body.email;

  passwordReset.generateFor(email).then(function(token) {
    var link = 'https://app.writespace.it/user/password/edit?token=' + token;
    userMailer.passwordReset(email, { resetLink: link }).deliver();

    res.json(201, { msg: 'A password reset link has been sent to ' + email });
  }).catch(function(err) {
    res.json(422, formatError('email', err));
  });
});

router.put('/passwords', bodyParser.json(), (req, res) => {
  req.accepts('application/json');

  passwordReset.reset(req.body).then(function(user) {
    res.json(201, user);
  }).catch(function(err) {
    res.json(422, formatError('password', err));
  });
});

module.exports = router;
