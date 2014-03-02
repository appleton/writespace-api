'use strict';

angular.module('notes', [
  'ui.router',
  'ui.ace',
  'angularMoment',
  'firstLine.filter',
  'users.service',
  'notes.service',
  'notes.index',
  'notes.show'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('auth', {
    abstract: true,
    template: '<ui-view />',
    resolve: {
      user: [
        'UsersService',
        '$state',
        function(UsersService, $state) {
          return UsersService.get().catch(function(err) {
            if (err.status === 401) $state.go('sessions');
          });
        }
      ]
    }
  });

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
