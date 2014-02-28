'use strict';

angular.module('sessions.service', [
  'constants',
  'param.service'
]).factory('SessionsService', [
  '$http',
  'param',
  'COUCH_URL',
  function($http, param, COUCH_URL){

    function get() {
      return $http.get(COUCH_URL + '/_session', { withCredentials: true });
    }

    function create(login) {
      return $http.post(COUCH_URL + '/_session', param(login), {
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    }

    return {
      get: get,
      create: create
    };
  }
]);
