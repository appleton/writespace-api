'use strict';

angular.module('firstLine.filter', [
]).filter('firstLine', [
  function() {
    return function(text) {
      return _.isString(text) ? _.first(text.split('\n')) : '';
    };
  }
]);
