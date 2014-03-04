'use strict';

angular.module('templates', []);

angular.module('notesy', [
  'templates',
  'notes',
  'users',
  'sessions',

  'auth.interceptor',

  'toggle'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
