'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  '$timeout',
  'NotesService',
  function($scope, $timeout, NotesService) {

    function isTextUnchanged() {
      return NotesService.get($scope.currentNote._id).then(function(note) {
        return $scope.currentNote.text === note.text;
      });
    }

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);
      editor.on('keyup', console.log.bind(console));
    };

    $scope.$watchCollection('currentNote.text', function() {
      // Only trigger a put if the text of the note is different to the text
      // in the database. This prevents a remote update from triggering an
      // immediate put with the same data.
      isTextUnchanged().then(function(isUnchanged) {
        if (isUnchanged) return;

        $scope.currentNote.updatedAt = (new Date()).valueOf();
        NotesService.put($scope.currentNote).then(function(resp) {
          $scope.currentNote._rev = resp.rev;
        });
      });
    });
  }
]);
