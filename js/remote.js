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
    var clickedOptionId = e.target.id;

    switch (clickedOptionId) {
        case "b1150g":
            searchBy = 1;
            break;
        case "b1150g1350g":
            searchBy = 3;
            break;
        case "b1350g1550g":
            searchBy = 5;
            break;
        case "b1550g2000g":
            searchBy = 12;
            break;
        default:
    }

    var col = $.map(csv_as_array,
        function getCol(value){

            return value[searchBy];
        });

    console.log(col);
});

    





