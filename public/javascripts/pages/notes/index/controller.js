'use strict';

angular.module('notes.index', [
  'ui.router',
  'ui.bootstrap',
  'notes.service',
  'sessions.service'
]).controller('NotesIndexController', [
  '$scope',
  '$state',
  '$modal',
  'notes',
  'user',
  'NotesService',
  'SessionsService',
  function($scope, $state, $modal, notes, user, NotesService, SessionsService) {
    NotesService.replicate(user.notes_db);

    $scope.notes = notes;
    $scope.user = user;
    $scope.search = {};

    $scope.isState = function(id) {
      return $state.is('auth.notes.show', { id: id });
    };

    $scope.addNote = function() {
      $scope.search.text = '';
      NotesService.post({ text: '' }).then(function(resp) {
        $state.go('auth.notes.show', { id: resp._id });
      });
    };

    $scope.logout = function() {
      SessionsService.destroy();
    };

    $scope.changeNote = function(isNext) {
      var notes = _($scope.notes).sortBy('updatedAt');

      // Apply view filter if required
      if ($scope.search.text && $scope.search.text !== '') {
        notes = notes.filter(function(note) {
          note = note.text.toUpperCase();
          return note.indexOf($scope.search.text.toUpperCase()) !== -1;
        });
      }

      if (isNext) notes = notes.reverse();
      notes = notes.value();

      var currentNote = _.find(notes, function(note) {
        return $state.is('auth.notes.show', { id: note._id });
      });

      var nextNote;
      if (currentNote == null) {
        nextNote = _.first(notes);
      } else {
        nextNote = notes[_.indexOf(notes, currentNote) + 1];
      }

      if (nextNote) $state.go('auth.notes.show', { id: nextNote._id });
    };

    $scope.showKeyboardHints = (function() {
      var modal;
      var tmpl = '/javascripts/pages/notes/index/keyboard-modal/template.html';

      return function() {
        if (modal) return;

        modal = $modal.open({ templateUrl: tmpl });

        modal.result.then(null, function() { modal = null; });
      };
    })();

    // Restart replication when we go back online
    $scope.$on('online', function() {
      NotesService.replicate($scope.user.notes_db);
    });
  }
]);
