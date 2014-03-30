'use strict';

angular.module('import.dropbox', [
  'ui.bootstrap',
  'import.dropbox.importer',
  'notes.resource'
]).controller('ImportDropboxController', [
  '$scope',
  '$stateParams',
  '$modal',
  '$q',
  'dropboxClient',
  'folderList',
  'user',
  'NotesResource',
  function(
    $scope,
    $stateParams,
    $modal,
    $q,
    dropboxClient,
    folderList,
    user,
    NotesResource
  ) {
    NotesResource.stopReplication();

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

    $scope.importFrom = function(path) {
      $modal.open({
        templateUrl: '/javascripts/pages/import/dropbox/importer/template.html',
        controller: 'ImportDropboxModalController',
        resolve: {
          user: function() { return user; },
          path: function() { return path; },
          dropboxClient: function() { return dropboxClient; },
          files: function() {
            var deferred = $q.defer();

            dropboxClient.readdir(path, function(err, entries, res, data) {
              if (err) deferred.reject(err);
              deferred.resolve(data);
            });

            return deferred.promise;
          }
        }
      });
    };
  }
]);
