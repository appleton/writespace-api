const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  require('dotenv').load();
}

const express      = require('express');
const morgan       = require('morgan')
const errorHandler = require('errorhandler');
const cors         = require('cors');

const app = express();

app.use(morgan('combined'));

app.use(cors({
  origin: process.env.CORS_ORIGIN, credentials: true
}));

if (NODE_ENV === 'development') {
  app.use(errorHandler());
}

app.use(require('./lib/routes/users'));
app.use(require('./lib/routes/passwords'));

module.exports = app;
