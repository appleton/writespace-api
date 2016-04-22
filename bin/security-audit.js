'use strict';

// Ensure that all users have an appropriately secure notes db
var dotenv = require('dotenv');
dotenv.load();

var _ = require('lodash');
var nano = require('nano');
var url = process.env.COUCH_URL;

var db = nano(url);

db.use('_users').list({include_docs: true}, function(err, res) {
  var users = _.filter(res.rows, function(row) {
    return row.id !== '_design/_auth';
  });

  var good = [];
  var bad = [];

  function progress() {
    if (good.length + bad.length === users.length - 1) {
      console.log('Done:');
      console.log('  ' + good.length + ' good databases');
      console.log('  ' + bad.length + ' needed fixing. Affected users: ', bad);
    }
  }

  users.forEach(function(user) {
    var email = user.id.replace('org.couchdb.user:', '');
    var notes = user.doc.notes_db;

    if (!notes) return;

    db.use(notes).get('_security', function(err, res) {
      var expected = { readers: { names: [ email ], roles: [] } };
      var isCorrect = _.isEqual(res, expected);
      if (isCorrect) {
        good.push(email);
        console.log('  --> ' + email + ' is all good!');
        return progress();
      }

      bad.push(email);
      console.log('  --> bad security setting for ' + email);

      db.use(notes).insert(expected, '_security', function(err) {
        if (err) {
          console.log('  --> error fixing security setting for ' + email);
        } else {
          console.log('  --> fixed security setting for ' + email);
        }
        progress();
      });

      progress();
    });
  });
});
