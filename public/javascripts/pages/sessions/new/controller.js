'use strict';

angular.module('sessions.new', [
  'sessions.service'
]).controller('SessionsNewController', [
  '$scope',
  '$state',
  'SessionsService',
  function($scope, $state, SessionsService) {

    $scope.form = {};

    $scope.login = function() {
      delete $scope.error;

      SessionsService.create($scope.form).then(function() {
        $state.go('auth.notes');
      }).catch(function(err) {
        $scope.error = err.data.reason;
      });
    };

  }
]);
