'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service',
  'sessions.service'
]).controller('NotesIndexController', [
  '$scope',
  '$state',
  'notes',
  'user',
  'NotesService',
  'SessionsService',
  function($scope, $state, notes, user, NotesService, SessionsService) {
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
  }
]);
