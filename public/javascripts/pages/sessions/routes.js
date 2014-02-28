'use strict';

angular.module('sessions', [
  'ui.router',
  'sessions.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('sessions', {
    url: '/users/login',
    templateUrl: '/javascripts/pages/sessions/new/template.html',
    controller: 'SessionsNewController'
  });

}]);
