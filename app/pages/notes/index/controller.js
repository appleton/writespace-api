'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service'
]).controller('NotesIndexController', [
  '$scope',
  '$state',
  'notes',
  'NotesService',
  function($scope, $state, notes, NotesService) {
    $scope.newNote = {};
    $scope.notes = _.pluck(notes.rows, 'doc');

    function isChanged(current, revision) {
      current = (current || { _rev: null });
      return current._rev !== _.last(revision.changes).rev;
    }

    function insertNote(newNote, oldNote) {
      _.pull($scope.notes, oldNote);
      $scope.notes.push(newNote);
    }

    NotesService.changes({
      include_docs: true,
      continuous: true,
      onChange: function(newNote) {
        var oldNote = _.find($scope.notes, { _id: newNote.id });
        if (isChanged(oldNote, newNote)) insertNote(newNote.doc, oldNote);
      }
    });

    $scope.isState = function(id) {
      return $state.is('notes.show', { id: id });
    };

    $scope.addNote = function() {
      var note = { updatedAt: (new Date()).valueOf(), text: '' };
      NotesService.post(note).then(function(resp) {
        note._id = resp.id;
        note._rev = resp.rev;
        insertNote(note);

        $state.go('notes.show', { id: resp.id });
      });
    };
  }
]);
