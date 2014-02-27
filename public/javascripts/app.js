'use strict';

angular.module('notesy', [
  'notes',
  'users',
  'toggle'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
