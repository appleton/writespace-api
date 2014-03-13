'use strict';

angular.module('setFocus.directive', [
]).directive('setFocus', [
  function() {

    return function(scope, el, attrs) {
      scope[attrs.setFocus] = function() {
        el[0].focus();
      };
    };

  }
]);
