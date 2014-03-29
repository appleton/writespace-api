'use strict';

angular.module('import.dropbox.importer', [
  'notes.resource'
]).controller('ImportDropboxModalController', [
  '$scope',
  '$q',
  '$modalInstance',
  'dropboxClient',
  'path',
  'files',
  'user',
  'NotesResource',
  function($scope, $q, $modalInstance, dropboxClient, path, files, user, NotesResource) {
    NotesResource = NotesResource.init(user.notes_db);
    $scope.form = {};

    $scope.path = path;
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

    $scope.import = function() {
      var promises = files.map(function(file) {
        return readFile(file.path).then(function(result) {
          return createNote(result);
        });
      });

      $q.all(promises).then(function(results) {
        console.log('DONE!', results);
      });
    };
  }
]);
