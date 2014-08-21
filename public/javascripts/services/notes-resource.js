'use strict';

angular.module('notes.resource', [
  'pouchdb',
  'ui.router'
]).factory('NotesResource', [
  'pouchdb',
  '$state',
  '$window',
  function(pouchdb, $state, $window){
    var COUCH_URL = $window.CONFIG.COUCH_URL;
    var sync, db;

    function init(dbName) {
      db = pouchdb.create(dbName);
      return db;
    }

    function alreadyReplicating() {
      return (sync && !sync.cancelled);
    }

    function replicate(dbName) {
      if (alreadyReplicating()) return;

      var protocol = $window.location.protocol;
      var remote = protocol + COUCH_URL + '/' + dbName;

      sync = db.replicate.sync(db, remote, {
        continuous: true,
        create_target: true,
        complete: function(resp) {
          // TODO: submit a pull to pouchdb to pass the actual error code
          //       through this is always a 500 right now which is no good for
          //       checking auth errors, hence the res.message comparison.
          if (resp.error &&
              resp.message === 'You are not authorized to access this db.') {
            $state.go('noAuth.sessions');
          }
        }
      });
    }

    function stopReplication() {
      sync && sync.cancel && sync.cancel();
    }

    return {
      init: init,
      replicate: replicate,
      stopReplication: stopReplication
    };

  }
]);
