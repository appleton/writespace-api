'use strict';

angular.module('notes.index', [
  'notes.service'
]).controller('NotesIndexController', [
  '$scope',
  'NotesService',
  function($scope, NotesService) {
    $scope.newNote = {};
    $scope.name = 'Notes';
    $scope.NotesService = NotesService;

    $scope.addNote = function() {
      NotesService.post($scope.form).then(function() {
        delete $scope.form.title;
        delete $scope.form.text;
      });
    };
  }
]);
