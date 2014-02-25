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

    function hasChanged(revision, oldNote) {
      oldNote = (oldNote || { _rev: null });
      return oldNote._rev !== revision.rev;
    }

    function handleChange(newNote, oldNote) {
      if (newNote._deleted) {
        _.pull($scope.notes, oldNote);
      } else if (oldNote) {
        _.assign(oldNote, newNote);
      } else {
        $scope.notes.push(newNote);
      }
    }

    function setActiveNote(ev, toState, toParams) {
      if (toState.name === 'notes.show') {
        $scope.currentNote = _.find(notes, { _id: toParams.id });
      }
    }

    NotesService.changes({
      include_docs: true,
      continuous: true,
      onChange: function(revision) {
        var oldNote = _.find($scope.notes, { _id: revision.id });
        var newNote = revision.doc;
        if (hasChanged(newNote, oldNote)) handleChange(newNote, oldNote);
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
        handleChange(note);

        $state.go('notes.show', { id: resp.id });
      });
    };
  }
]);
