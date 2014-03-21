'use strict';

angular.module('passwords', [
  'ui.router',
  'passwords.new',
  'passwords.edit'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('passwords', {
    abstract: true,
    template: '<ui-view />'
  });

  $stateProvider.state('passwords.new', {
    url: '/users/passwords/new',
    templateUrl: '/javascripts/pages/passwords/new/template.html',
    controller: 'PasswordsNewController'
  });

  $stateProvider.state('passwordsEdit', {
    url: '/users/passwords/edit/:token',
    templateUrl: '/javascripts/pages/passwords/edit/template.html',
    controller: 'PasswordsEditController'
  });

}]);
