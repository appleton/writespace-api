'use strict';

var nano = require('nano');

module.exports = nano(process.env.COUCH_URL);
