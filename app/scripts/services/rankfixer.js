'use strict';

angular.module('rankEditorApp')
  .service('Rankfixer', function Rankfixer() {

    // Source: http://www.bennadel.com/blog/1504-Ask-Ben-Parsing-CSV-Strings-With-Javascript-Exec-Regular-Expression-Command.htm
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.

function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
}


    return {
    		duplicate: function(list) {
                var originalLength = list.length;
                console.log("original length was:", originalLength)
    			for (var k = 0; k < originalLength; k++) {
                        // set the newRank property to a number and get rid of the text
                        if(list[k].newLifetime) {list[k].newLifetime = parseInt(list[k].newLifetime[0])
                        }
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
                                        Country: list[k].Country,
                                        streetAddress1: list[k].streetAddress1,
                                        streetAddress2: list[k].streetAddress2,
                                        city: list[k].city,
                                        state: list[k].state
                                        });
                                    decrementVar++;
                            }
    				    }
    			}
    		},


 CSV2JSON: function(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");

    return objArray;     // was str
}    



    }


  });
