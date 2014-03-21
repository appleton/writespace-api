'use strict';

// Migrate all databases and associated security documents from src to dest.

var _ = require('lodash');
var nano = require('nano');
var src = 'http://user:pass@sourcecouch.com/';
var dest = 'http://user:pass@destcouch.com/';

var srcDb = nano(src);
var destDb = nano(dest);

srcDb.db.list(function(err, res) {
  var dbs = _.filter(res, function(name) { return name !== '_replicator'; });

  dbs.forEach(function(name) {
    console.log('replicating ' + name);
    srcDb.db.replicate(name, dest + name, {
      create_target: true
    }, function(err) {
      if (err) return console.log('error ', err);
      console.log('replicated ' + name);

      if (name === '_users') return;

      console.log('getting security doc for ' + name);
      srcDb.use(name).get('_security', function(err, res) {
        if (err) return console.log('error ', err);

        console.log('setting security doc for ' + name + ' to: ', res);
        destDb.use(name).insert('_security', res, function(err) {
          if (err) return console.log('error ', err);
          console.log('set security doc for ' + name);
        });
      });
    });
  });
});
