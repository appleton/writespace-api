'use strict';

angular.module('users.new', [
  'users.service',
  'sessions.service'
]).controller('UsersNewController', [
  '$scope',
  '$state',
  'UsersService',
  'SessionsService',
  function($scope, $state, UsersService, SessionsService) {

    $scope.form = {};

    $scope.createUser = function() {
      UsersService.create($scope.form).then(function() {
        return SessionsService.create($scope.form).then(function() {
          $state.go('auth.notes');
        });
      }).catch(function(err) {
        if (err.data && err.data.errors) {
          $scope.error = err.data.errors.join(', ');
        }
      });
    };

  }
]);
