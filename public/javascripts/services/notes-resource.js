'use strict';

angular.module('notes.resource', [
  'pouchdb',
  'constants'
]).factory('NotesResource', [
  'pouchdb',
  'COUCH_URL',
  function(pouchdb, COUCH_URL){
    var notes = pouchdb.create('notes');

    pouchdb.replicate('notes', COUCH_URL + '/notes', {
      continuous: true,
      create_target: true
    });

    pouchdb.replicate(COUCH_URL + '/notes', 'notes', {
      continuous: true,
      create_target: true
    });

    return notes;
  }
]);
