'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  'note',
  'NotesService',
  function($scope, note, NotesService) {
    $scope.note = note;

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setHighlightActiveLine(false);
    };
  }
]);
