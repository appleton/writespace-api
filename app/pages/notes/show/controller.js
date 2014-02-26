'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  'note',
  'NotesService',
  function($scope, note, NotesService) {
    $scope.note = note;

    // Add a shortcut to turn it off in the ace instance
    var DISABLE_SHORTCUTS = [
      { win: 'Ctrl-F', mac: 'Command-F' },
      { win: 'Ctrl-L', mac: 'Command-L' }
    ];

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);

      editor.commands.addCommands(DISABLE_SHORTCUTS.map(function(keys) {
        return {
          name: 'disable' + keys.mac,
          bindKey: keys,
          exec: function disabled() { return false; },
          readOnly: true
        };
      }));

      editor.focus();
    };

    $scope.$watchCollection('note.text', function() {
      NotesService.put($scope.note);
    });

  }
]);
