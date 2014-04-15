var csv_as_array = [];
function drawVisualization() {
  $.ajax({
    url: "test.csv",
    async: false,
    success: function (csvd) {
        csv_as_array = $.csv.toArrays(csvd);
    }, 
    dataType: "text",
    complete: function () {
        // use the array of arrays (variable csv_as_array)
       // for further processing
       console.log(csv_as_array);
    }
  });
}

drawVisualization();