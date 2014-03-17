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
      $scope.formDisabled = true;

      UsersService.create($scope.form).then(function() {
        var user = { name: $scope.form.email, password: $scope.form.password };

        return SessionsService.create(user).then(function() {
          $state.go('auth.notes');
        });
      }).catch(function(err) {
        if (err.data && err.data.errors) $scope.errors = err.data.errors;
        $scope.formDisabled = false;
      });
    };

  }
]);
