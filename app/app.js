'use strict';

angular.module('notesy', [
  'notes',
  'toggle'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
