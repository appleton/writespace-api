'use strict';

var nano = require('nano');

module.exports = nano(process.env.CLOUDANT_URL);
