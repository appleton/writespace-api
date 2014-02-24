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

    function insertNote(current, revision) {
      _.pull($scope.notes, current);
      $scope.notes.push(revision.doc);
    }

    function resetForm() {
      $scope.showNewNoteForm = false;
      delete $scope.form.title;
      delete $scope.form.text;
    }

    NotesService.changes({
      include_docs: true,
      continuous: true,
      onChange: function(newNote) {
        var oldNote = _.find($scope.notes, { _id: newNote.id });
        if (isChanged(oldNote, newNote)) insertNote(oldNote, newNote);
      }
    });

    $scope.isState = function(id) {
      return $state.is('notes.show', { id: id });
    };

    $scope.toggleNewNoteForm = function() {
      $scope.showNewNoteForm = true;
    };

    $scope.addNote = function() {
      $scope.form.updatedAt = (new Date()).valueOf();
      NotesService.post($scope.form).then(function(resp) {
        resetForm();
        $state.go('notes.show', { id: resp.id });
      });
    };
  }
]);
