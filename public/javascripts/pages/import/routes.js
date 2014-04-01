'use strict';

angular.module('import', [
  'ui.router',
  'import.dropbox',
  'dropbox.service',
  'ui.bootstrap'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('auth.notes.import', {
    abstract: true,
    template: '<ui-view />',
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
      ]
    }
  });

  var openModal;

  $stateProvider.state('auth.notes.import.dropbox', {
    url: 'import/dropbox',

    onEnter: [
      '$q', '$state', '$modal', 'user', 'dropboxClient',
      function($q, $state, $modal, user, dropboxClient) {
        if (openModal) openModal.close();

        openModal = $modal.open({
          templateUrl: '/javascripts/pages/import/dropbox/template.html',
          controller: 'ImportDropboxModalController',
          resolve: {
            user: function() { return user; },

            dropboxClient: function() { return dropboxClient; },

            files: [
              function() {
                if (!dropboxClient.isAuthenticated()) return;
                var deferred = $q.defer();

                dropboxClient.readdir('/', function(err, entries, res, data) {
                  if (err) deferred.reject(err);
                  deferred.resolve(data);
                });

                return deferred.promise;
              }
            ]
          }
        });

        openModal.result.finally(function() {
          openModal = null;
          // Always go to index on modal close
          $state.go('auth.notes');
        });
      }
    ]
  });

}]);
