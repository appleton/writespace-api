'use strict';

angular.module('users.service', [
  'sessions.service',
  'constants'
]).factory('UsersService', [
  '$q',
  '$http',
  '$window',
  'COUCH_URL',
  'SessionsService',
  function($q, $http, $window, COUCH_URL, SessionsService){

    function get() {
      return SessionsService.get().then(function(session) {
        if (session.data.userCtx.name == null) {
          var deferred = $q.defer();
          deferred.reject({
            data: { error: 'unauthorized', reason: 'Not signed in' },
            status: 401
          });
          return deferred.promise;
        }

        var slug = 'org.couchdb.user:' + session.data.userCtx.name;
        var url = COUCH_URL + '/_users/' + $window.encodeURIComponent(slug);

        return $http.get(url, { withCredentials: true }).then(function(user) {
          return user.data;
        });
      });
    }

    function create(user) {
      return $http.post('/users', user);
    }

    return {
      create: create,
      get: get
    };
  }
]);
