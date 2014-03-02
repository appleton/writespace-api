'use strict';

angular.module('notesy', [
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
