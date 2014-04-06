'use strict';

angular.module('notes', [
  'ui.router',
  'ui.bootstrap',
  'ui.codemirror',

  'abstractRoutes',
  'keybinding.directive',
  'setFocus.directive',
  'initFocus.directive',
  'line.filter',
  'timeAgo.filter',
  'printErrors.filter',
  'users.service',
  'notes.service',
  'notes.index',
  'notes.show'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('auth.notes', {
    url: '/',
    templateUrl: '/javascripts/pages/notes/index/template.html',
    controller: 'NotesIndexController',
    resolve: {
      notes: [
        'NotesService',
        'user',
        function(NotesService, user) {
          NotesService.init(user.notes_db);
          return NotesService.allDocs();
        }
      ]
    }
  });

  $stateProvider.state('auth.notes.show', {
    url: ':id',
    templateUrl: '/javascripts/pages/notes/show/template.html',
    controller: 'NotesShowController',
    resolve: {
      note: [
        'NotesService',
        '$stateParams',
        'user',
        function(NotesService, $stateParams, user) {
          NotesService.init(user.notes_db);
          return NotesService.get($stateParams.id);
        }
      ]
    }
  });

}]);
