'use strict';

angular.module('offline.interceptor', [
]).factory('OfflineInterceptor', [
  '$window',
  function($window) {
    // Error in couch and node formats
    var message = 'It looks like you have no internet connection';
    var noConnectionError = {
      reason: message,
      errors: [{ msg: message }]
    };

    function isOffline() {
      return !$window.navigator.onLine;
    }

    function hasNoErrorMessage(response) {
      return !response.data.reason && !response.data.errors;
    }

    return function(promise) {
      return promise.catch(function(response) {
        if (isOffline() && hasNoErrorMessage(response)) {
          response.data = noConnectionError;
        }
        return promise;
      });
    };

  }
])
.config([
  '$httpProvider',
  function($httpProvider) {
    $httpProvider.responseInterceptors.push('OfflineInterceptor');
  }
]);
