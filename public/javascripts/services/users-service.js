'use strict';

angular.module('users.service', [
  'sessions.service'
]).factory('UsersService', [
  '$q',
  '$http',
  '$window',
  'SessionsService',
  function($q, $http, $window, SessionsService){
    var COUCH_URL = $window.CONFIG.COUCH_URL;

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
          $window.localStorage.setItem('notesyUser', JSON.stringify(user.data));
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
