'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  '$timeout',
  'NotesService',
  function($scope, $timeout, NotesService) {

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);
    };

    $scope.$watchCollection('currentNote.text', (function() {
      // Do not trigger watch function until after the first digest cycle
      var isInitializing = true;
      $timeout(function() { isInitializing = false; });

      return function() {
        if (isInitializing) return;
        $scope.currentNote.updatedAt = (new Date()).valueOf();
        NotesService.put($scope.currentNote).then(function(resp) {
          $scope.currentNote._rev = resp.rev;
        });
      };
    })());
  }
]);
