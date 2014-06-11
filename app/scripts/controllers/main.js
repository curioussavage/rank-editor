'use strict';

angular.module('rankEditorApp')
  .controller('MainCtrl', function ($scope, Json, Rankfixer, Rankexport) {

  		

  		// $scope.file = $('fileInput')[0].file[0];
  		// console.log(typeof($scope.csvFile)); 


  		


  		$scope.import = function() {
  			console.log(typeof($scope.csvFile)); 
  			// Json.fetch(file).then(function(data) {
            
            
     //        $scope.IEs = data;
     //        console.log("# of records before processing: ", $scope.IEs.length)
     //        Rankfixer.duplicate($scope.IEs);
     //        console.log("# of records after processing:", $scope.IEs.length)

     //    });

  		}
        $scope.add = function(){
    var f = document.getElementById('file').files[0],
        reader = new FileReader();
    reader.onloadend = function(e){
      var data = e.target.result;
      //send you binary data via $http or $resource or do anything else with it
      $scope.IEs = Rankfixer.CSV2JSON(data);
      console.log($scope.IEs);
      console.log(typeof($scope.IEs))

    }
    reader.readAsBinaryString(f);
  }


  			 

  		$scope.duplicate = Rankfixer.duplicate;
       

        $scope.reportTitle = "rank Report";

        	$scope.export = function() {
        		 Rankexport.JSONToCSVConvertor($scope.IEs, $scope.reportTitle, true);
        	}


				

				


        
  });
