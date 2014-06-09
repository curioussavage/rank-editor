'use strict';

angular.module('rankEditorApp')
  .service('Json', function Json($q,$timeout, $http) {

        return {
            fetch: function(callback) {

                var deferred = $q.defer();

                $timeout(function() {
                    $http.get('convertcsv.json').success(function(data) {
                        deferred.resolve(data);

                    });
                },30);

                return deferred.promise;
            },

        };






  });
