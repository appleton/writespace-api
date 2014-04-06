'use strict';


angular.module('abstractRoutes', [
  'ui.router'
]).config(['$stateProvider', function($stateProvider) {

  // A noAuth route requires that the user is not signed in
  $stateProvider.state('noAuth', {
    abstract: true,
    template: '<ui-view />',
    resolve: {
      user: [
        'UsersService',
        '$state',
        '$q',
        function(UsersService, $state, $q) {
          // Return a promise which resolves if we're not signed in and rejects
          // if we are

          var deferred = $q.defer();

          UsersService.get().then(function() {
            deferred.reject();
            $state.go('auth.notes');
          }).catch(function() {
            deferred.resolve();
          });

          return deferred.promise;
        }
      ]
    }
  });

  // An auth route requires that the user is signed in
  $stateProvider.state('auth', {
    abstract: true,
    template: '<ui-view />',
    resolve: {
      user: [
        'UsersService',
        '$state',
        '$window',
        function(UsersService, $state, $window) {
          return UsersService.get().catch(function(err) {
            // Go to login if we're not authed
            if (err.status === 401) $state.go('noAuth.sessions');

            // If we're offline, try to return user data from localStorage
            if (err.status === 0 || !$window.navigator.onLine) {
              var user = $window.localStorage.getItem('notesyUser');
              if (user) return JSON.parse(user);
            }
          });
        }
      ]
    }
  });

}]);
