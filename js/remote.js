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



var productType = 'b1150g';
var freshFrozen = 'fresh';
var cdate = new Date();
var cyear = cdate.getFullYear();

// Get the correct column from array
function getData() {
    var searchBy = '';
    var searchTwo = '';
    var clickedOptionId = productType;

    switch (clickedOptionId) {
        case "b1150g":
            searchBy = 0;
            fresh = 3;
            frozen = 5;
            break;
        case "b1150g1350g":
            searchBy = 3;
            fresh = 1;
            frozen = 3;
            break;
        case "b1350g1550g":
            searchBy = 5;
            fresh = 1;
            frozen = 3;
            break;
        case "b1550g2000g":
            searchBy = 12;
            fresh = 1;
            frozen = 3;
            break;
        default:
    }

    var col1 = $.map(csv_as_array,function getCol1(value){

            return value[searchBy];
        });

    var col2 = $.map(csv_as_array,function getCol2(value){

            return value[fresh];
        });

    var col3 = $.map(csv_as_array,function getCol2(value){

            return value[frozen];
        });

    console.log(col1);
    console.log(col2);
    console.log(col3);

    var weight = [];
    var date = [];
    var mix = '';

    for (i = 0; i < col1.length; i++) {
        var dateHyphenated = col1[i];
        var weightString = parseInt(col2[i],10);
        var frozenCost = parseInt(col3[i],10);
        weight.push(weightString);
        // remove hyphen from date string
        var dateNoHyphen = dateHyphenated.split("-").join(" ");
        // push to new array
        date.push(dateNoHyphen);

       

        var dyear = "20" + dateHyphenated.substr(dateHyphenated.length - 2); 

        if (dyear == cyear) {
            if (freshFrozen == 'fresh') {

                mix += "[" + dateNoHyphen + "," + weightString + "]" + ",";

            } else {

                mix += "[" + dateNoHyphen + "," + frozenCost + "]" + ",";
            }
    }
    }

console.log(mix);

console.log(dyear);


}


$('.dropdown-menu li').click(function (e) {
    productType = e.target.id;
    console.log(productType);
    renderGraph();
});
$('#fresh').click(function () {
    freshFrozen = 'fresh';
    console.log(freshFrozen);
    getData();
});
$('#frozen').click(function () {
    freshFrozen = 'frozen';
    console.log(freshFrozen);
    getData();
});



    





