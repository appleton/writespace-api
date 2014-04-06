'use strict';

angular.module('users', [
  'abstractRoutes',
  'ui.router',
  'users.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('noAuth.users', {
    url: '/users/new',
    templateUrl: '/javascripts/pages/users/new/template.html',
    controller: 'UsersNewController'
  });

}]);
