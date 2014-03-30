'use strict';

angular.module('import', [
  'ui.router',
  'import.dropbox',
  'dropbox.service'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('auth.notes.importDropbox', {
    url: 'import/dropbox?path',
    templateUrl: '/javascripts/pages/import/dropbox/template.html',
    controller: 'ImportDropboxController',
    resolve: {
      dropboxClient: [
        '$q',
        'DropboxService',
        function($q, DropboxService) {
          var deferred = $q.defer();
          var opts = { interactive: false };

          DropboxService.authenticate(opts, function(err, client) {
            if (err) return deferred.reject(err);
            deferred.resolve(client);
          });

          return deferred.promise;
        }
      ],
      folderList: [
        '$q',
        '$stateParams',
        'dropboxClient',
        function($q, $stateParams, dropboxClient) {
          if (!dropboxClient.isAuthenticated()) return;
          var deferred = $q.defer();
          var path = $stateParams.path || '/';

          dropboxClient.readdir(path, function(err, entries, res, data) {
            if (err) deferred.reject(err);
            deferred.resolve(data);
          });

          return deferred.promise;
        }
      ]
    }
  });

}]);
