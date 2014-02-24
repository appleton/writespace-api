'use strict';

angular.module('notes.service', [
  'pouchdb'
]).factory('NotesService', [
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

    // TODO: wrap post and put to add created at and updated at timestamps
    return notes;
  }
]);
