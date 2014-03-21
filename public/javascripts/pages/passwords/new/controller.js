'use strict';

angular.module('passwords.new', [
  'passwords.service'
]).controller('PasswordsNewController', [
  '$scope',
  'PasswordsService',
  function($scope, PasswordsService) {
    $scope.form = {};

    $scope.resetPassword = function() {
      $scope.formDisabled = true;

      PasswordsService.create($scope.form).then(function(resp) {
        $scope.message = resp.data.msg;
        delete $scope.errors;
        $scope.formDisabled = false;
      }).catch(function(err) {
        delete $scope.message;
        if (err.data && err.data.errors) $scope.errors = err.data.errors;
        $scope.formDisabled = false;
      });
    };
  }
]);
