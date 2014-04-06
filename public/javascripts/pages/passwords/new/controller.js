'use strict';

angular.module('passwords.new', [
  'passwords.service',
  'alert.service'
]).controller('PasswordsNewController', [
  '$scope',
  '$state',
  'PasswordsService',
  'AlertService',
  function($scope, $state, PasswordsService, AlertService) {
    $scope.form = {};

    $scope.resetPassword = function() {
      $scope.formDisabled = true;

      PasswordsService.create($scope.form).then(function(resp) {
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
