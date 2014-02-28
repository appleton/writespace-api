'use strict';

angular.module('sessions.new', [
  'sessions.service'
]).controller('SessionsNewController', [
  '$scope',
  'SessionsService',
  function($scope, SessionsService) {

    $scope.form = {};

    $scope.login = function() {
      SessionsService.create($scope.form).then(function() {
        console.log(arguments);
      });
    };

  }
]);
