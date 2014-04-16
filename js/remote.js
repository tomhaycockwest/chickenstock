// load in csv file
// var prices = "http://staging.chickenstockapp.com/test.csv";
var csv_as_array = [];
function loadPrices() {
  $.ajax({
    url: 'test.csv',
    async: false,
    success: function (csvd) {
        csv_as_array = $.csv.toArrays(csvd);
    },
    dataType: "text",
  });
}

loadPrices();


// Get the correct column from array
$('.dropdown-menu li').click(function (e) {
    var searchBy = '';
    var searchTwo = '';
    var clickedOptionId = e.target.id;

    switch (clickedOptionId) {
        case "b1150g":
            searchBy = 0;
            searchTwo = 3;
            break;
        case "b1150g1350g":
            searchBy = 3;
            searchTwo = 1;
            break;
        case "b1350g1550g":
            searchBy = 5;
            searchTwo = 1;
            break;
        case "b1550g2000g":
            searchBy = 12;
            searchTwo = 1;
            break;
        default:
    }

    var col1 = $.map(csv_as_array,function getCol1(value){

            return value[searchBy];
        });

    var col2 = $.map(csv_as_array,function getCol2(value){

            return value[searchTwo];
        });

    console.log(col1);
    console.log(col2);


    console.log(typeof col1[0]);
    console.log(typeof col2[0]);

    var date = col1[0];
    var weight = parseInt(col2[0],10);

    var array = [[date + ',' + weight]];
    console.log(array);
    // console.log(csv_as_array[searchBy][searchTwo]);
});

    





