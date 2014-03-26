'use strict';

angular.module('import.dropbox', [
]).controller('ImportDropboxController', [
  '$scope',
  '$stateParams',
  'dropboxClient',
  'folderList',
  function($scope, $stateParams, dropboxClient, folderList) {
    $scope.isAuthenticated = dropboxClient.isAuthenticated();
    $scope.files = folderList;

    $scope.parentPath = $stateParams.path.split('/').slice(0, -1).join('/');
    if ($scope.parentPath[0] !== '/') {
      $scope.parentPath = '/' + $scope.parentPath;
    }
    $scope.isRoot = ($scope.parentPath === $stateParams.path);

    $scope.authenticate = function() {
      dropboxClient.authenticate();
    };

  }
]);
