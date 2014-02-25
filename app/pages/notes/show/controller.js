'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  '$state',
  'NotesService',
  function($scope, $state, NotesService) {

    function isTextUnchanged() {
      var id = ($scope.currentNote && $scope.currentNote._id) || '';
      return NotesService.get(id).then(function(note) {
        return $scope.currentNote.text === note.text;
      }, $state.go.bind($state, 'notes'));
    }

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);
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
