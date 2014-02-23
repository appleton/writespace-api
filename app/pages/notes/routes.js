'use strict';

angular.module('notes', [
  'ui.router',
  'notes.index',
  'notes.show'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('notes', {
    url: '/',
    templateUrl: '/app/pages/notes/index/template.html',
    controller: 'NotesIndexController'
  });

  $stateProvider.state('notes.show', {
    url: ':id',
    templateUrl: '/app/pages/notes/show/template.html',
    controller: 'NotesShowController',
    resolve: {
      note: [
        '$stateParams', 'NotesService',
        function($stateParams, NotesService) {
          return NotesService.get($stateParams.id);
        }
      ]
    }
  });

}]);
