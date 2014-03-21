'use strict';

angular.module('passwords.service', [
]).factory('PasswordsService', [
  '$http',
  function($http){

    function create(user) {
      return $http.post('/users/passwords', user);
    }

    return {
      create: create
    };
  }
]);
