const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  require('dotenv').load();
}

var express = require('express');
var morgan = require('morgan')
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var expressValidator = require('express-validator');
var cors = require('cors');

var userValidation = require('./middleware/user-validator');
var createUser = require('./services/create-user');
var passwordReset = require('./services/password-reset');
var userMailer = require('./mailers/user-mailer');
var adminMailer = require('./mailers/admin-mailer');

var app = express();

app.use(morgan('combined'))
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressValidator());

if (NODE_ENV === 'development') {
  app.use(errorHandler());
}

function formatError(attribute, error) {
  return {
    errors: [{
      source: {
        pointer: `data/attributes/${attribute}`
      },
      detail: error.message
    }]
  };
}

app.post('/users', userValidation, function(req, res) {
  req.accepts('application/json');

  createUser(req.body).then(function(user) {
    res.json(201, user);

    adminMailer.newUser(process.env.ADMIN_EMAIL, {
      newUser: req.body.email
    }).deliver();
  }).catch(function(err) {
    console.log('User creation error: ', err);
    res.json(422, formatError('user', err));
  });
});

app.options('/passwords', cors({ credentials: true }));

app.post('/passwords', function(req, res) {
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

app.put('/passwords', function(req, res) {
  req.accepts('application/json');

  passwordReset.reset(req.body).then(function(user) {
    res.json(201, user);
  }).catch(function(err) {
    res.json(422, formatError('password', err));
  });
});

module.exports = app;
