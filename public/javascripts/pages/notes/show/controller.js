'use strict';

angular.module('notes.show', [
  'notes.service',
  'ui.bootstrap',
  'delete.modal'
]).controller('NotesShowController', [
  '$scope',
  '$window',
  '$modal',
  'note',
  'NotesService',
  function($scope, $window, $modal, note, NotesService) {
    $scope.note = note;

    // Add a shortcut to turn it off in the ace instance
    var DISABLE_SHORTCUTS = [
      { win: 'Ctrl-F', mac: 'Command-F' },
      { win: 'Ctrl-L', mac: 'Command-L' }
    ];

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(18);
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

      editor.commands.addCommands([{
        name: 'unfocus',
        bindKey: { mac: 'Esc', win: 'Esc' },
        exec: function unfocus() {
          // Hacky. Focus whatever just to remove it from ace
          $window.document.body.querySelector('button').focus();
        },
        readOnly: true
      }]);

      editor.focus();
    };

    $scope.showDeleteModal = (function() {
      var modal;
      var tmpl = '/javascripts/pages/notes/show/delete-modal/template.html';

      return function() {
        if (modal) return;

        modal = $modal.open({
          templateUrl: tmpl,
          controller: 'DeleteModalController',
          resolve: { note: function() { return $scope.note; } }
        });

        modal.result.then(null, function() { modal = null; });
      };
    })();

    var putNote = _.debounce(function() {
      NotesService.put($scope.note);
    }, 1000);

    $scope.$watchCollection('note.text', putNote);

  }
]);
