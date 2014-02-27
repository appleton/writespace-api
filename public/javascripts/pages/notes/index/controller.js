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

    $scope.isState = function(id) {
      return $state.is('notes.show', { id: id });
    };

    $scope.addNote = function() {
      NotesService.post({ text: '' }).then(function(resp) {
        $state.go('notes.show', { id: resp._id });
      });
    };
  }
]);
