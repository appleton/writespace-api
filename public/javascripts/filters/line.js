'use strict';

angular.module('line.filter', [
]).filter('line', [
  function() {
    // Return the nth non blank line
    return function(text, line) {
      line = (line || 1) - 1;
      return _.isString(text) ? _.filter(text.split('\n'), function(line) {
        return line && line !== '';
      })[line] : '';
    };
  }
]);
