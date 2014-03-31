'use strict';

angular.module('import.dropbox.importer', [
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
    NotesResource = NotesResource.init(user.notes_db);

    $scope.form = {};

    $scope.path = '/';
    $scope.files = files;

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

      return NotesResource.post({
        text: text,
        createdAt: file.metadata.clientModifiedAt.valueOf(),
        updatedAt: file.metadata.clientModifiedAt.valueOf()
      });
    }

    $scope.importedCount = 0;
    $scope.import = function() {
      // Save some CPU and bandwidth whist replicaing
      NotesResource.stopReplication();

      $scope.isImporting = true;

      var promises = files.map(function(file) {
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
  }
]);
