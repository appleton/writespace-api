'use strict';

angular.module('alert.controller', [
  'alert.service'
]).controller('AlertController', [
  '$scope', 'AlertService',
  function AlertController($scope, AlertService) {

    $scope.appAlerts = AlertService.get();
    $scope.closeAlert = function(index) {
      $scope.appAlerts.splice(index, 1);
    };

  }
]);
