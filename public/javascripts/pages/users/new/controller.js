'use strict';

angular.module('users.new', [
  'users.service'
]).controller('UsersNewController', [
  '$scope',
  'UsersService',
  function($scope, UsersService) {

    $scope.form = {};

    $scope.createUser = function() {
      UsersService.create($scope.form).then(function() {
        console.log(arguments);
      });
    };

  }
]);
