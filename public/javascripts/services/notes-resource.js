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
    var srcReplication, destReplication;

    function init(dbName) {
      return pouchdb.create(dbName);
    }

    function alreadyReplicating() {
      return (srcReplication && !srcReplication.cancelled) ||
               (destReplication && !destReplication.cancelled);
    }

    function replicate(dbName) {
      if (alreadyReplicating()) return;

      var remote = COUCH_URL + '/' + dbName;

      srcReplication = pouchdb.replicate(dbName, remote, {
        continuous: true,
        create_target: true,
        complete: function(resp) {
          // TODO: submit a pull to pouchdb to pass the actual error code
          //       through this is always a 500 right now which is no good for
          //       checking auth errors, hence the res.message comparison.
          if (resp.error &&
              resp.message === 'You are not authorized to access this db.') {
            $state.go('sessions');
          }
        }
      });

      destReplication = pouchdb.replicate(remote, dbName, {
        continuous: true,
        create_target: true
      });
    }

    function stopReplication() {
      srcReplication && srcReplication.cancel && srcReplication.cancel();
      destReplication && destReplication.cancel && destReplication.cancel();
    }

    return {
      init: init,
      replicate: replicate,
      stopReplication: stopReplication
    };

  }
]);
