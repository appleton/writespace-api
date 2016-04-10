'use strict';

var path = require('path');
var glob = require('glob');
var couchapp = require('couchapp');
require('dotenv').load();

module.exports = function() {
  glob('db/databases/*.js', function(err, files) {
    files.forEach(function(file) {
      var doc = require(path.join(process.cwd(), file));
      var dbName = path.basename(file, '.js');
      var url = process.env.COUCH_URL + '/' + dbName;

      couchapp.createApp(doc, url, function(res) {
        console.log(dbName + ' pushed, rev: ' + res.current._rev);
      });
    });
  });
};
