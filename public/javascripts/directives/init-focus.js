'use strict';

angular.module('initFocus.directive', [
]).directive('initFocus', function() {
  return function(scope, el) {
    el[0].focus();
  };
});
