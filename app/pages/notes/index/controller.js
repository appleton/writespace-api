'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service'
]).controller('NotesIndexController', [
  '$scope',
  '$rootScope',
  '$state',
  'notes',
  'NotesService',
  function($scope, $rootScope, $state, notes, NotesService) {
    $scope.notes = notes;

    function isChanged(current, revision) {
      current = (current || { _rev: null });
      return current._rev !== _.last(revision.changes).rev;
    }

    function updateNote(newNote, oldNote) {
      _.assign(oldNote, newNote);
    }

    function setActiveNote(ev, toState, toParams) {
      if (toState.name === 'notes.show') {
        $scope.currentNote = _.find(notes, { _id: toParams.id });
      }
    }

    NotesService.changes({
      include_docs: true,
      continuous: true,
      onChange: function(newNote) {
        var oldNote = _.find($scope.notes, { _id: newNote.id });
        if (isChanged(oldNote, newNote)) updateNote(newNote.doc, oldNote);
      }
    });

    $rootScope.$on('$stateChangeStart', setActiveNote);

    if ($state.is('notes.show')) {
      setActiveNote(null, { name: 'notes.show' }, $state.params);
    }

    $scope.isState = function(id) {
      return $state.is('notes.show', { id: id });
    };

    $scope.addNote = function() {
      var note = { updatedAt: (new Date()).valueOf(), text: '' };
      NotesService.post(note).then(function(resp) {
        note._id = resp.id;
        note._rev = resp.rev;
        $scope.notes.push(note);

        $state.go('notes.show', { id: resp.id });
      });
    };
  }
]);
