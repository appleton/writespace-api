'use strict';

angular.module('users.service', [
]).factory('UsersService', [
  '$http',
  function($http){

    function create(user) {
      return $http.post('/users', user);
    }

    return {
      create: create
    };
  }
]);
