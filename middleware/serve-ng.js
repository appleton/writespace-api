'use strict';

var path = require('path');

module.exports = function serveIndex(req, res, next) {
  if (!path.extname(req.url)) req.url = '/index.html';
  next();
};
