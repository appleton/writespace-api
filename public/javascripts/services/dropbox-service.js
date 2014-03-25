'use strict';

angular.module('dropbox.service', [
]).factory('DropboxService', [
  '$window',
  function($window) {
    var DROPBOX_KEY = $window.CONFIG.DROPBOX_KEY;

    return new $window.Dropbox.Client({
      key: DROPBOX_KEY
    });
  }
]);
