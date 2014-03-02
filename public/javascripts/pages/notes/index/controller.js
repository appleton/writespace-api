'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service',
  'sessions.service'
]).controller('NotesIndexController', [
  '$scope',
  '$rootScope',
  '$state',
  'notes',
  'NotesService',
  'SessionsService',
  function($scope, $rootScope, $state, notes, NotesService, SessionsService) {
    $scope.notes = notes;

    $scope.isState = function(id) {
      return $state.is('auth.notes.show', { id: id });
    };

    $scope.addNote = function() {
      NotesService.post({ text: '' }).then(function(resp) {
        $state.go('auth.notes.show', { id: resp._id });
      });
    };

    $scope.logout = function() {
      SessionsService.destroy().then(function() {
        $state.go('sessions');
      });
    };
  }
]);
