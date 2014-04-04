'use strict';

angular.module('import.dropbox', [
  'notes.resource',
  'alert.service'
]).controller('ImportDropboxModalController', [
  '$scope',
  '$state',
  '$q',
  '$modalInstance',
  'dropboxClient',
  'files',
  'user',
  'NotesResource',
  'AlertService',
  function(
    $scope,
    $state,
    $q,
    $modalInstance,
    dropboxClient,
    files,
    user,
    NotesResource,
    AlertService
  ) {
    var notesResource = NotesResource.init(user.notes_db);

    function filterFiles(files) {
      return _.where(files, { isFile: true });
    }

    function calculateParents() {
      var currentPath = $scope.path || '/';
      var splitPath = currentPath.split('/');
      if (currentPath === '/') splitPath = splitPath.slice(1);

      return splitPath.reduce(function(memo, folder) {
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
    }

    $scope.form = {};
    var fileTree = { '/': files };

    $scope.isAuthenticated = dropboxClient.isAuthenticated();
    $scope.path = '/';
    $scope.files = files;
    $scope.parents = calculateParents();

    $scope.cancel = $modalInstance.dismiss.bind($modalInstance, 'cancel');

    function readFile(path) {
      var deferred = $q.defer();

      dropboxClient.readFile(path, function(err, contents, metadata) {
        if (err) return deferred.reject(err);
        deferred.resolve({ contents: contents, metadata: metadata });
      });

      return deferred.promise;
    }

    // TODO: try to avoid duplication
    function createNote(file) {
      var text = file.contents;

      if ($scope.form.includeTitle) {
        var title = file.metadata.name;
        title = title.substr(0, title.lastIndexOf('.')) || title;
        text = title + '\n' + text;
      }

      return notesResource.post({
        text: text,
        createdAt: file.metadata.clientModifiedAt.valueOf(),
        updatedAt: file.metadata.clientModifiedAt.valueOf()
      });
    }

    // TODO: move this to a service
    $scope.importedCount = 0;
    $scope.import = function() {
      // Save some CPU and bandwidth whist replicaing
      NotesResource.stopReplication();

      $scope.isImporting = true;

      var filesToImport = filterFiles($scope.files);

      var promises = filesToImport.map(function(file) {
        return readFile(file.path).then(function(result) {
          return createNote(result);
        }).then(function(result) {
          $scope.importedCount++;
          return result;
        });
      });

      $q.all(promises).then(function(results) {
        var message = 'Imported ' + results.length + ' notes succesfully';
        AlertService.success(message);
        $state.go('auth.notes');
        $modalInstance.close('Imported');
      });
    };

    $scope.authenticate = function() {
      dropboxClient.authenticate();
    };

    function navigateTo(path) {
      $scope.path = path;
      $scope.files = fileTree[path];
      $scope.parents = calculateParents();
      $scope.loadingPath = null;
    }

    $scope.navigateTo = function(path) {
      if ($scope.loadingPath) return;

      $scope.loadingPath = path;

      if (fileTree[path]) return navigateTo(path);

      dropboxClient.readdir(path, function(err, entries, res, data) {
        if (err) return;
        $scope.$apply(function() {
          fileTree[path] = data;
          navigateTo(path);
        });
      });
    };

    $scope.isLoading = function(path) {
      return path === $scope.loadingPath;
    };

    $scope.countFiles = function(files) {
      return filterFiles(files).length;
    };
  }
]);
