'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service'
]).controller('NotesIndexController', [
  '$scope',
  '$state',
  'NotesService',
  function($scope, $state, NotesService) {
    $scope.newNote = {};
    $scope.NotesService = NotesService;

    function resetForm() {
      $scope.showNewNoteForm = false;
      delete $scope.form.title;
      delete $scope.form.text;
    }

    $scope.toggleNewNoteForm = function() {
      $scope.showNewNoteForm = true;
    };

    $scope.addNote = function() {
      NotesService.post($scope.form).then(function(resp) {
        resetForm();
        $state.go('notes.show', { id: resp.id });
      });
    };
  }
]);
