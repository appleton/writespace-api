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
        $window.Mousetrap.bind(scope.keys, function(ev) {
          ev && ev.preventDefault && ev.preventDefault();
          scope.onPress();
        });

        scope.$on('$destroy', function() {
          $window.Mousetrap.unbind(scope.keys);
        });
      }
    };

  }
]);
