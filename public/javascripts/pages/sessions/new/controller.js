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
      SessionsService.create($scope.form).then(function() {
        $state.go('auth.notes');
      });
    };

  }
]);
