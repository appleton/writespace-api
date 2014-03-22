'use strict';

angular.module('sessions.service', [
  'param.service'
]).factory('SessionsService', [
  '$http',
  'param',
  '$window',
  function($http, param, $window) {
    var COUCH_URL = $window.CONFIG.COUCH_URL;

    function get() {
      return $http.get(COUCH_URL + '/_session', { withCredentials: true });
    }

    function create(login) {
      return $http.post(COUCH_URL + '/_session', param(login), {
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    }

    function destroy() {
      var url = COUCH_URL + '/_session';
      return $http.delete(url, { withCredentials: true }).then(function() {
        $window.localStorage.removeItem('notesyUser');
        // full page refresh to cancel continuous replication
        $window.location = '/users/login';
      });
    }

    return {
      get: get,
      create: create,
      destroy: destroy
    };
  }
]);
