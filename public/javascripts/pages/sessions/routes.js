'use strict';

angular.module('sessions', [
  'ui.router',
  'abstractRoutes',
  'sessions.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('noAuth.sessions', {
    url: '/users/login',
    templateUrl: '/javascripts/pages/sessions/new/template.html',
    controller: 'SessionsNewController'
  });

}]);
