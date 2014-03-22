'use strict';

angular.module('alert.directive', [
  'alert.controller'
]).directive('alert', [
  '$location', '$window',
  function($location, $window) {

    return {
      restrict: 'E',
      templateUrl: '/javascripts/directives/alert/template.html',
      transclude: true,
      replace: true,
      scope:{
        type: '@',
        close: '&'
      },
      link: function alertDirectiveLink(scope) {
        // Hide
        $window.setTimeout(function() {
          scope.$apply(scope.close);
        }, 5000);

        var hasShown;
        scope.$watch(function() {
          return $location.url();
        }, function() {
          if (hasShown) scope.close();
          hasShown = true;
        });
      }
    };

  }
]);
