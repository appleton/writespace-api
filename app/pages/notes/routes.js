'use strict';

angular.module('notes', [
  'ui.router',
  'ui.ace',
  'angularMoment',
  'firstLine.filter',
  'notes.service',
  'notes.index',
  'notes.show'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('notes', {
    url: '/',
    templateUrl: '/app/pages/notes/index/template.html',
    controller: 'NotesIndexController',
    resolve: {
      notes: [
        'NotesService',
        function(NotesService) {
          return NotesService.allDocs();
        }
      ]
    }
  });

  $stateProvider.state('notes.show', {
    url: ':id',
    templateUrl: '/app/pages/notes/show/template.html',
    controller: 'NotesShowController',
    resolve: {
      note: [
        'NotesService', '$stateParams',
        function(NotesService, $stateParams) {
          return NotesService.get($stateParams.id);
        }
      ]
    }
  });

}]);
