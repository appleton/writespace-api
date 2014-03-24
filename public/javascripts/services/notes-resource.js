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

    function init(dbName) {
      var notes = pouchdb.create(dbName);
      replicate(dbName);

      return notes;
    }

    function replicate(dbName) {
      var remote = COUCH_URL + '/' + dbName;

      pouchdb.replicate(dbName, remote, {
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

      pouchdb.replicate(remote, dbName, {
        continuous: true,
        create_target: true
      });
    }

    return {
      init: init,
      replicate: replicate
    };

  }
]);
