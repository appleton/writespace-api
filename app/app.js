'use strict';

angular.module('notesy', [
  'notes'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);
