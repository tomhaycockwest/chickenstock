var csv_as_array = [];
function loadPrices() {
  $.ajax({
    url: "test.csv",
    async: false,
    success: function (csvd) {
        csv_as_array = $.csv.toArrays(csvd);
    },
    dataType: "text",
  });
}

loadPrices();


// function getCol() {
//     // use the array of arrays (variable csv_as_array)
//    // for further processing

// 	var col3 = csv_as_array.map(function(value,index) { 
//    		return value[0]; 
//    	});

// 		console.log(col3);

// }



var col = $.map(
    csv_as_array,
    function getCol(value,index){

        return value[0];
    }
    );

	console.log(col);



// csv_as_array.map(paste);
// var index = 0;
// function paste(value,index) {
// 	console.log(value[index]);
// 	index ++;
// }

// for (var i=0;i<csv_as_array.length;i++)
// {
//     console.log(csv_as_array[i]);
// }

// function getCol(matrix, col){
//     var column = [];
//     for(var i=0; i<matrix.length; i++){
//        column.push(matrix[i][col]);
//     }
//     return column;
//  }

//  var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array
//  getCol(csv_as_array, 0); //Get first column