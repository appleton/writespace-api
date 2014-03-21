'use strict';

angular.module('passwords', [
  'ui.router',
  'passwords.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('passwords', {
    url: '/users/passwords/new',
    templateUrl: '/javascripts/pages/passwords/new/template.html',
    controller: 'PasswordsNewController'
  });

}]);
