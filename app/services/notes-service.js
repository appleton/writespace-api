'use strict';

angular.module('notes.service', [
  'pouchdb'
]).service('NotesService', [
  'pouchdb',
  function(pouchdb){
    var notes = pouchdb.create('notes');

    pouchdb.replicate('notes', 'http://localhost:5984/notes', {
      continuous: true,
      create_target: true
    });

    pouchdb.replicate('http://localhost:5984/notes', 'notes', {
      continuous: true,
      create_target: true
    });

    return notes;
  }
]);
