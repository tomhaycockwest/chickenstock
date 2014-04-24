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

// checks whether a number is returned in the case of out of season products
function isANumber(valIn) {
    if ( isNaN(valIn) === false ) {
     return (valIn);
    } else {
    return 0;
    }
}

function lastPrices(row) {
    var lasttwo = csv_as_array.slice(Math.max(csv_as_array.length - 2, 1));
    var price = lasttwo[row];

    return price;
}



loadPrices();
var lastprice = lastPrices(0);
var currentprice = lastPrices(1);

var list = $('.price').first();
extractResult(lastprice);

function extractResult(result){     
    jQuery.each(result, function(index, value) {
        // create a LI for each iteration and append to the UL
        $("<div />", {text: value}).appendTo(list);
    });
}

// var counter = 0;
// $('.price').text(lastprice[ansstring]);


// for (counter=0; counter < lastprice.length; counter++) {
//     var ansstring = $.map(lastprice[counter], function (value) {
//         return '<div class="price">' + value + '</div>'
//     }).join('');
//     $('.price').html(ansstring);

//     counter++;
// } 

// for (i=0; i<lastprice.length; i++) {
//     var item = lastprice[i];
//     console.log(item);
//     // var element = $('<div>'+i+'</div>');
//     // elements = elements.add('<div>'+lastprice[i]+'</div>');
// }

// $('.price').first().text(lastprice[0]);






// for (i = 0; i < lastprice.length; i++) {
//     var ansstring = $.map(lastprice[i], function (value) {
//         return '<div class="price">' + value + '</div>'
//     }).join('');
//     $('.price').html(ansstring);

//     console.log(ansstring);
// }



$(document).ready(function () {

    var productType = 'b1150g';
    var freshFrozen = 'fresh';
    var cdate = new Date();

    var currentYear = cdate.getFullYear();
    var lyear = (cdate.getFullYear() -1);
    var yearBeforeLast = (cdate.getFullYear() -2);

    // Get the correct column from array
    function getData(cyear) {
        var dateCol = 0;
        var fresh = '';
        var frozen = '';

        var clickedOptionId = productType;

        switch (clickedOptionId) {
            case "b1150g":
                fresh = 3;
                frozen = 20;
                break;
            case "b1150g1350g":
                fresh = 4;
                frozen = 21;
                break;
            case "b1350g1550g":
                fresh = 5;
                frozen = 22;
                break;
            case "b1550g2050g":
                fresh = 6;
                frozen = 23;
                break;
            case "r2050g2450g":
                fresh = 7;
                frozen = 24;
                break;
            case "r2450g":
                fresh = 8;
                frozen = 25;
                break;
            case "breast":
                fresh = 9;
                frozen = 26;
                break;
            case "725kg":
                fresh = 12;
                frozen = 29;
                break;
            case "725kg9kg":
                fresh = 13;
                frozen = 30;
                break;
            case "9kg":
                fresh = 14;
                frozen = 31;
                break;
            case "ducklingWeight":
                fresh = 16;
                frozen = 33;
                break;
            case "gooseWeight":
                fresh = 18;
                frozen = 35;
                break;
            default:
        }

        var col1 = $.map(csv_as_array,function getCol1(value){

                return value[dateCol];
            });

        var col2 = $.map(csv_as_array,function getCol2(value){

                return isANumber(value[fresh]);
            });

        var col3 = $.map(csv_as_array,function getCol2(value){

                return isANumber(value[frozen]);
            });

        var weight = [];
        var date = [];
        var index = 0;

        var arrayLength = 52;
        var mix = new Array(arrayLength);
        for (var i = 0; i < mix.length; i++) {
            mix[i] = new Array(arrayLength);
        }

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

            if (dyear === cyear) {
                if (freshFrozen === 'fresh') {

                    mix[index][0] = dateNoHyphen.substr(0, dateNoHyphen.length -2) + '12';
                    mix[index][1] = weightString;
                    index ++;

                } else {

                    mix[index][0] = dateNoHyphen.substr(0, dateNoHyphen.length -2) + '12';
                    mix[index][1] = frozenCost;
                    index ++;
                }
            }
        }
        return mix;
    }


    $('.dropdown-menu li').click(function (e) {
        productType = e.target.id;
        renderGraph();
    });
    $('#fresh').click(function () {
        freshUpdate();
        renderGraph();
    });
    $('#frozen').click(function () {
        frozenUpdate();
        renderGraph();
    });
    $('#chickenGraph').click(function () {
        $('#chickenDropdown span').html('Broilers &lt; 1,150g');
        $('#chickenDropdown').addClass('active-dropdown').siblings('.dropdown').removeClass('active-dropdown');
        productType = 'b1150g';
        renderGraph();
    });
    $('#turkeyGraph').click(function () {
        $('#turkeyDropdown span').html('&lt; 7.25kg');
        $('#turkeyDropdown').addClass('active-dropdown').siblings('.dropdown').removeClass('active-dropdown');
        productType = '725kg';
        renderGraph();
    });
    $('#ducklingGraph').click(function () {
        $('#ducklingDropdown').addClass('active-dropdown').siblings('.dropdown').removeClass('active-dropdown');
        productType = 'ducklingWeight';
        renderGraph();
    });
    $('#gooseGraph').click(function () {
        $('#gooseDropdown').addClass('active-dropdown').siblings('.dropdown').removeClass('active-dropdown');
        productType = 'gooseWeight';
        renderGraph();
    });

        // Graph Settings
        var seriesOptions = [
                    {
                        label:currentYear,
                        color:'#bf4423',
                        shadow: false
                    },
                    {
                        label:lyear,
                        color:'#fd881b',
                        shadow: false
                    },
                    {
                        label:yearBeforeLast,
                        color:'#ff0',
                        shadow: false
                    }
                ];
        
        function renderGraph() {
            var twoYearsAgo = getData('2012');
            var lastYear = getData('2013');
            var thisYear = getData('2014');
            if (plot1) {
                plot1.destroy();
            }

        plot1 = $.jqplot('graph', [thisYear, lastYear, twoYearsAgo], {
            animate: true,
            textColor: '#42454f',
            gridPadding:{right:35},
            legend: {
                show:true
            },
            grid: {
                backgroundColor: "#28292c",
                gridLineColor: "#40444d",
                borderColor: "#28292c",
                shadow: false,
                
            },
            axes:{
                xaxis:{
                renderer:$.jqplot.DateAxisRenderer,
                tickOptions:{formatString:'%b'},
                min:'Jan, 2012',
                tickInterval:'1 month',
                },

            },
            highlighter: {
                   show: true,
                   sizeAdjust: 10,
                 },
            series: seriesOptions,
        });
    }

    var plot1;

    function freshUpdate() {
        seriesOptions = [
                        {
                            label:currentYear,
                            color:'#bf4423',
                            shadow: false
                        },
                        {
                            label:lyear,
                            color:'#fd881b',
                            shadow: false
                        },
                        {
                            label:yearBeforeLast,
                            color:'#ff0',
                            shadow: false
                        }
                    ];
        freshFrozen = 'fresh';
    }

    function frozenUpdate() {
        seriesOptions = [
                        {
                            label:currentYear,
                            color:'#0c5888',
                            shadow: false
                        },
                        {
                            label:lyear,
                            color:'#0084d8',
                            shadow: false
                        },
                        {
                            label:yearBeforeLast,
                            color:'#ff0',
                            shadow: false
                        }
                    ];
        freshFrozen = 'frozen';
    }
    renderGraph();

});



    





