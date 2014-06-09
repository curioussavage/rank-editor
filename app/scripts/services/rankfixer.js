'use strict';

angular.module('rankEditorApp')
  .service('Rankfixer', function Rankfixer() {
    return {
    		duplicate: function(list) {
                var originalLength = list.length;
    			for (var k = 0; k < originalLength; k++) {
                        // set the newRank property to a number and get rid of the text
                        list[k].newLifetime = parseInt(list[k].newLifetime[0])

    				if (list[k].numAdvancements > 1) {


                                    var copyLifetime = {
                                        newLifetime: list[k].newLifetime
                                    };

                                
                                var decrementVar = 1;

    					        for (var i = 1; i <= list[k].numAdvancements - 1; i++) {


                                
                                    list.push(
                                        {
                                        ieNum: list[k].ieNum,
                                        ieName: list[k].ieName,
                                        prevLifetime: list[k].prevLifetime,
                                        newLifetime: list[k].newLifetime - decrementVar,
                                        numAdvancements: list[k].numAdvancements,
                                        country: list[k].country,
                                        streetAddress1: list[k].streetAddress1,
                                        streetAddress2: list[k].streetAddress2,
                                        city: list[k].city,
                                        state: list[k].state
                                        });
                                    decrementVar++;
                            }
    				    }
    			}
    		}

    }


  });
