'use strict';

angular.module('templates', []);

angular.module('notesy', [
  'templates',
  'notes',
  'users',
  'sessions',
  'passwords',

  'auth.interceptor',
  'offline.interceptor',
  'alert.directive'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]).run([
  '$rootScope',
  '$window',
  function($rootScope, $window) {
    $window.addEventListener('online', function() {
      $rootScope.$apply(function() {
        $rootScope.$broadcast('online');
      });
    });

    $window.addEventListener('offline', function() {
      $rootScope.$apply(function() {
        $rootScope.$broadcast('offline');
      });
    });
  }
]);
