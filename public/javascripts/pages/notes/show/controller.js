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

    $scope.editorOptions = {
      mode: 'gfm',
      theme: 'notesy',
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList',
        'Esc': function() {
          // Hacky. Focus whatever just to remove it from ace
          $window.document.body.querySelector('button').focus();
        }
      },
      autoFocus: true
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
