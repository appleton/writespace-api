'use strict';

angular.module('passwords.edit', [
  'passwords.service',
  'alert.service'
]).controller('PasswordsEditController', [
  '$scope',
  '$state',
  '$stateParams',
  'PasswordsService',
  'AlertService',
  function($scope, $state, $stateParams, PasswordsService, AlertService) {
    $scope.form = { token: $stateParams.token };

    $scope.editPassword = function() {
      $scope.formDisabled = true;

      PasswordsService.update($scope.form).then(function(resp) {
        AlertService.success(resp.data.msg);
        $state.go('noAuth.sessions');
      }).catch(function(err) {
        delete $scope.message;
        if (err.data && err.data.errors) $scope.errors = err.data.errors;
        $scope.formDisabled = false;
      });
    };
  }
]);
