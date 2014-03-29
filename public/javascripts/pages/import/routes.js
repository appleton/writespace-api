'use strict';

angular.module('import', [
  'ui.router',
  'import.dropbox',
  'dropbox.service'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('import', {
    abstract: true,
    template: '<ui-view />',
    resolve: {
      user: [
        'UsersService',
        '$state',
        function(UsersService, $state) {
          return UsersService.get().catch(function(err) {
            // Go to login if we're not authed
            if (err.status === 401) $state.go('sessions');
          });
        }
      ]
    }
  });

  $stateProvider.state('import.dropbox', {
    url: '/import/dropbox?path',
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
