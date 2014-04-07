'use strict';

angular.module('auth.interceptor', [
  'ui.router'
]).factory('AuthInterceptor', [
  '$injector',
  function($injector) {

    function isAuthResponse(response) {
      var url = (response && response.config && response.config.url) || '';
      return _.contains(url, '/_session');
    }

    return function(promise) {
      return promise.catch(function(response) {
        if (response.status === 401 && !isAuthResponse(response)) {
          $injector.get('$state').go('noAuth.sessions');
        }
        return promise;
      });
    };

  }
])

// We have to add the interceptor to the queue as a
// string because the interceptor depends upon service
// instances that are not available in the config block.
.config([
  '$httpProvider',
  function($httpProvider) {
    $httpProvider.responseInterceptors.push('AuthInterceptor');
  }
]);
