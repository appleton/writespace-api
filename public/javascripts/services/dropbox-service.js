'use strict';

angular.module('dropbox.service', [
]).factory('DropboxService', [
  '$window',
  function($window) {
    var DROPBOX_KEY = $window.CONFIG.DROPBOX_KEY;

    var client = new $window.Dropbox.Client({
      key: DROPBOX_KEY
    });

    client.authDriver(new $window.Dropbox.AuthDriver.Popup({
      receiverUrl: 'http://localhost:1337/dropbox-callback.html'
    }));

    return client;
  }
]).run([
  '$window', '$state', '$stateParams',
  function($window, $state, $stateParams) {

    $window.addEventListener('message', function receiveMessage(ev) {
      if (ev.data.match(/dropboxjs_oauth/g)) {
        // Hack. Should be able to use $state.reload() here but can't due to
        // https://github.com/angular-ui/ui-router/issues/582
        $state.transitionTo($state.current, angular.copy($stateParams), {
          reload: true,
          inherit: true,
          notify: true
        });
      }
    });

  }
]);
