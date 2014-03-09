'use strict';

angular.module('notes.index', [
  'ui.router',
  'ui.bootstrap',
  'keyboard.modal',
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
    $scope.notes = notes;
    $scope.user = user;

    $scope.isState = function(id) {
      return $state.is('auth.notes.show', { id: id });
    };

    $scope.addNote = function() {
      NotesService.post({ text: '' }).then(function(resp) {
        $state.go('auth.notes.show', { id: resp._id });
      });
    };

    $scope.logout = function() {
      SessionsService.destroy();
    };

    $scope.changeNote = function(isNext) {
      var notes = _($scope.notes).sortBy('updatedAt');
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

      return function() {
        if (modal) return;

        modal = $modal.open({
          templateUrl: '/javascripts/pages/notes/index/keyboard-modal/template.html',
          controller: 'KeyboardModalController'
        });

        modal.result.then(null, function() { modal = null; });
      };
    })();
  }
]);
