'use strict';

angular.module('passwords.edit', [
  'passwords.service'
]).controller('PasswordsEditController', [
  '$scope',
  '$state',
  '$stateParams',
  'PasswordsService',
  function($scope, $state, $stateParams, PasswordsService) {
    $scope.form = { token: $stateParams.token };

    $scope.editPassword = function() {
      $scope.formDisabled = true;

      PasswordsService.update($scope.form).then(function() {
        $state.go('sessions');
      }).catch(function(err) {
        delete $scope.message;
        if (err.data && err.data.errors) $scope.errors = err.data.errors;
        $scope.formDisabled = false;
      });
    };
  }
]);
