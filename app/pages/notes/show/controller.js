'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  '$timeout',
  'note',
  'NotesService',
  function($scope, $timeout, note, NotesService) {
    var id = note._id;
    $scope.note = note;

    function isChanged(revision) {
      return $scope.note._rev !== _.last(revision.changes).rev;
    }

    function updateChangedAttrs(newNote) {
      _.forOwn(newNote, function(value, key) {
        if ($scope.note[key] !== value) $scope.note[key] = value;
      });
    }

    NotesService.changes({
      continuous: true,
      filter: function(doc) { return doc._id === id; },
      onChange: function(changes) {
        if (isChanged(changes)) NotesService.get(id).then(updateChangedAttrs);
      }
    });

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);
    };

    $scope.$watchCollection('note.text', (function() {
      // Do not trigger watch function until after the first digest cycle
      var initializing = true;
      $timeout(function() { initializing = false; });

      return function() {
        if (initializing) return;
        $scope.note.updatedAt = (new Date()).valueOf();
        NotesService.put($scope.note).then(function(resp) {
          $scope.note._rev = resp.rev;
        });
      };
    })());
  }
]);
