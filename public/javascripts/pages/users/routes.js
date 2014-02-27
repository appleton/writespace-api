'use strict';

angular.module('users', [
  'ui.router',
  'users.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('users', {
    url: '/users/new',
    templateUrl: '/javascripts/pages/users/new/template.html',
    controller: 'UsersNewController'
  });

}]);
