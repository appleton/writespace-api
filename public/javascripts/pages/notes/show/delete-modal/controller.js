'use strict';

angular.module('delete.modal', [
  'notes.service',
  'ui.router'
]).controller('DeleteModalController', [
  '$scope',
  '$state',
  '$modalInstance',
  'NotesService',
  'note',
  function($scope, $state, $modalInstance, NotesService, note) {

    $scope.note = note;

    $scope.cancel = $modalInstance.dismiss.bind($modalInstance, 'cancel');

    $scope.deleteNote = function() {
      NotesService.remove($scope.note).then(function() {
        $modalInstance.close('Deleted');
        $state.go('auth.notes');
      });
    };
  }
]);
