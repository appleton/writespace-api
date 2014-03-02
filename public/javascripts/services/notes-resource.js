'use strict';

angular.module('notes.resource', [
  'pouchdb',
  'constants'
]).factory('NotesResource', [
  'pouchdb',
  'COUCH_URL',
  function(pouchdb, COUCH_URL){

    function init(dbName) {
      var notes = pouchdb.create(dbName);
      var remote = COUCH_URL + '/' + dbName;

      pouchdb.replicate(dbName, remote, {
        continuous: true,
        create_target: true
      });

      pouchdb.replicate(remote, dbName, {
        continuous: true,
        create_target: true
      });

      return notes;
    }

    return {
      init: init
    };

  }
]);
