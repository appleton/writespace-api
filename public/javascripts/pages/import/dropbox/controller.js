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

    var currentPath = $stateParams.path || '/';
    var splitPath = currentPath.split('/');
    if (currentPath === '/') splitPath = splitPath.slice(1);

    $scope.parents = splitPath.reduce(function(memo, folder) {
      var prev = memo[memo.length - 1] || { path: '' };
      var name = '/' + (folder === '' ? 'Dropbox' : folder);
      var path = (prev.path === '/' ? '' : prev.path) + '/' + folder;

      memo.push({
        name: name,
        path: path,
        isCurrent: (path === currentPath)
      });

      return memo;
    }, []);

    $scope.authenticate = function() {
      dropboxClient.authenticate();
    };

  }
]);
