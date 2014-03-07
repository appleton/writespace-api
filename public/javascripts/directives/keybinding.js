'use strict';

angular.module('keybinding.directive', [
]).directive('keybinding', [
  '$window',
  function keybindingDirective($window) {

    return {
      restrict: 'E',
      scope: {
        keys: '@',
        onPress: '&'
      },
      link: function(scope) {
        $window.Mousetrap.bind(scope.keys, scope.onPress);
      }
    };

  }
]);
