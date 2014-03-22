'use strict';

angular.module('templates', []);

angular.module('notesy', [
  'templates',
  'notes',
  'users',
  'sessions',
  'passwords',

  'auth.interceptor',
  'alert.directive'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
