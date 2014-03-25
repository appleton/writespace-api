'use strict';

angular.module('import.dropbox', [
]).controller('ImportDropboxController', [
  '$scope',
  'dropboxClient',
  'folderList',
  function($scope, dropboxClient, folderList) {
    $scope.isAuthenticated = dropboxClient.isAuthenticated();
    $scope.files = folderList;

    $scope.authenticate = function() {
      dropboxClient.authenticate();
    };

  }
]);
