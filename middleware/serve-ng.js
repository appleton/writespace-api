'use strict';

var url = require('url');
var path = require('path');

module.exports = function serveIndex(req, res, next) {
  var reqPath = url.parse(req.url).pathname;
  if (!path.extname(reqPath)) req.url = '/index.html';
  next();
};
