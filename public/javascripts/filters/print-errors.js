'use strict';

angular.module('printErrors.filter', [
]).filter('printErrors', [
  function() {
    return function(errors) {
      var str = _.map(errors, function(err){
        return [err.param, err. msg].join(' ');
      }).join(', ');

      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  }
]);
