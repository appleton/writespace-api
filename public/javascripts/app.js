'use strict';

angular.module('notesy', [
  'notes',
  'users',
  'sessions',
  'toggle'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
