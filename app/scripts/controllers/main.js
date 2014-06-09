'use strict';

angular.module('rankEditorApp')
  .controller('MainCtrl', function ($scope, Json, Rankfixer) {


        Json.fetch().then(function(data) {
            
            
            $scope.IEs = data;
            console.log($scope.IEs.length)
            Rankfixer.duplicate($scope.IEs);
            console.log($scope.IEs.length)



        });

        
  });
