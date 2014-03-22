'use strict';

angular.module('passwords.service', [
]).factory('PasswordsService', [
  '$http',
  function($http){

    function create(user) {
      return $http.post('/users/passwords', user);
    }

    function update(data) {
      return $http.post('/users/passwords/edit', data);
    }

    return {
      create: create,
      update: update
    };
  }
]);
