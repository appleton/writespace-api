const express = require('express');
const router  = new express.Router();

const bodyParser       = require('body-parser');
const expressValidator = require('express-validator');

const formatErorr    = require('../helpers/format-error');
const userValidation = require('../middleware/user-validator');
const userCreator    = require('../mediators/users/creator');
const userMailer     = require('../mailers/user-mailer');

router.post('/users', bodyParser.json(), expressValidator(), userValidation, (req, res) => {
  req.accepts('application/json');

  userCreator(req.body).then(function(user) {
    res.json(201, user);

    adminMailer.newUser(process.env.ADMIN_EMAIL, {
      newUser: req.body.email
    }).deliver();
  }).catch(function(err) {
    console.log('User creation error: ', err);
    res.json(422, formatError('user', err));
  });
});

module.exports = router;
