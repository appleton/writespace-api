'use strict';

angular.module('keyboard.modal', [
]).controller('KeyboardModalController', [
  '$scope',
  '$modalInstance',
  function($scope, $modalInstance) {
    $scope.close = $modalInstance.close;
  }
]);
