'use strict';

angular.module('users.service', [
]).factory('UsersService', [
  '$http',
  function($http){

    function create(user) {
      return $http.put('http://localhost:5984/_users', {
        _id: 'org.couchdb.user:' + user.email,
        name: user.email,
        type: 'user',
        roles: [],
        password: user.password
      });
    }

    return {
      create: create
    };
  }
]);
