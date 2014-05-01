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

loadPrices();

function updatePrices() {

    $('#freshprice1150g').text(csv_as_array [csv_as_array.length -1][3]);
    $('#frozenprice1150g').text(csv_as_array [csv_as_array.length -1][20]);
    $('#freshprice1150g1350g').text(csv_as_array [csv_as_array.length -1][4]);
    $('#frozenprice1150g1350g').text(csv_as_array [csv_as_array.length -1][21]);
    $('#freshprice1350g1550g').text(csv_as_array [csv_as_array.length -1][5]);
    $('#frozenprice1350g1550g').text(csv_as_array [csv_as_array.length -1][22]);
    $('#freshprice1550g2050g').text(csv_as_array [csv_as_array.length -1][6]);
    $('#frozenprice1550g2050g').text(csv_as_array [csv_as_array.length -1][23]);
    $('#freshprice2050g2450g').text(csv_as_array [csv_as_array.length -1][7]);
    $('#frozenprice2050g2450g').text(csv_as_array [csv_as_array.length -1][24]);
    $('#freshprice2450g').text(csv_as_array [csv_as_array.length -1][8]);
    $('#frozenprice2450g').text(csv_as_array [csv_as_array.length -1][25]);
    $('#freshpricebreast').text(csv_as_array [csv_as_array.length -1][9]);
    $('#frozenpricebreast').text(csv_as_array [csv_as_array.length -1][26]);
    $('#freshprice725kg').text(csv_as_array [csv_as_array.length -1][12]);
    $('#frozenprice725kg').text(csv_as_array [csv_as_array.length -1][29]);
    $('#freshprice725kg9kg').text(csv_as_array [csv_as_array.length -1][13]);
    $('#frozenprice725kg9kg').text(csv_as_array [csv_as_array.length -1][30]);
    $('#freshprice9kg').text(csv_as_array [csv_as_array.length -1][14]);
    $('#frozenprice9kg').text(csv_as_array [csv_as_array.length -1][31]);
    $('#freshpriceduckling').text(csv_as_array [csv_as_array.length -1][16]);
    $('#frozenpriceduckling').text(csv_as_array [csv_as_array.length -1][33]);
    $('#freshpricegoose').text(csv_as_array [csv_as_array.length -1][18]);
    $('#frozenpricegoose').text(csv_as_array [csv_as_array.length -1][35]);



    if (csv_as_array [csv_as_array.length -1][3] > csv_as_array [csv_as_array.length -2][3]) {
        $('#freshprice1150g').addClass('increase');
    } else {
        $('#freshprice1150g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][20] > csv_as_array [csv_as_array.length -2][20]) {
        $('#frozenprice1150g').addClass('increase');
    } else {
        $('#frozenprice1150g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][4] > csv_as_array [csv_as_array.length -2][4]) {
        $('#freshprice1150g1350g').addClass('increase');
    } else {
        $('#freshprice1150g1350g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][21] > csv_as_array [csv_as_array.length -2][21]) {
        $('#frozenprice1150g1350g').addClass('increase');
    } else {
        $('#frozenprice1150g1350g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][5] > csv_as_array [csv_as_array.length -2][5]) {
        $('#freshprice1350g1550g').addClass('increase');
    } else {
        $('#freshprice1350g1550g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][22] > csv_as_array [csv_as_array.length -2][22]) {
        $('#frozenprice1350g1550g').addClass('increase');
    } else {
        $('#frozenprice1350g1550g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][6] > csv_as_array [csv_as_array.length -2][6]) {
        $('#freshprice1550g2050g').addClass('increase');
    } else {
        $('#freshprice1550g2050g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][23] > csv_as_array [csv_as_array.length -2][23]) {
        $('#frozenprice1550g2050g').addClass('increase');
    } else {
        $('#frozenprice1550g2050g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][7] > csv_as_array [csv_as_array.length -2][7]) {
        $('#freshprice2050g2450g').addClass('increase');
    } else {
        $('#freshprice2050g2450g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][24] > csv_as_array [csv_as_array.length -2][24]) {
        $('#frozenprice2050g2450g').addClass('increase');
    } else {
        $('#frozenprice2050g2450g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][8] > csv_as_array [csv_as_array.length -2][8]) {
        $('#freshprice2450g').addClass('increase');
    } else {
        $('#freshprice2450g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][25] > csv_as_array [csv_as_array.length -2][25]) {
        $('#frozenprice2450g').addClass('increase');
    } else {
        $('#frozenprice2450g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][9] > csv_as_array [csv_as_array.length -2][9]) {
        $('#freshpricebreast').addClass('increase');
    } else {
        $('#freshpricebreast').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][26] > csv_as_array [csv_as_array.length -2][26]) {
        $('#frozenpricebreast').addClass('increase');
    } else {
        $('#frozenpricebreast').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][12] > csv_as_array [csv_as_array.length -2][12]) {
        $('#freshprice725kg').addClass('increase');
    } else {
        $('#freshprice725kg').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][29] > csv_as_array [csv_as_array.length -2][29]) {
        $('#frozenprice725kg').addClass('increase');
    } else {
        $('#frozenprice1150g').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][13] > csv_as_array [csv_as_array.length -2][13]) {
        $('#freshprice725kg9kg').addClass('increase');
    } else {
        $('#freshprice725kg9kg').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][30] > csv_as_array [csv_as_array.length -2][30]) {
        $('#frozenprice725kg9kg').addClass('increase');
    } else {
        $('#frozenprice725kg9kg').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][14] > csv_as_array [csv_as_array.length -2][14]) {
        $('#freshprice9kg').addClass('increase');
    } else {
        $('#freshprice9kg').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][31] > csv_as_array [csv_as_array.length -2][31]) {
        $('#frozenprice9kg').addClass('increase');
    } else {
        $('#frozenprice9kg').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][16] > csv_as_array [csv_as_array.length -2][16]) {
        $('#freshpriceduckling').addClass('increase');
    } else {
        $('#freshpriceduckling').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][20] > csv_as_array [csv_as_array.length -2][33]) {
        $('#frozenpriceduckling').addClass('increase');
    } else {
        $('#frozenpriceduckling').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][18] > csv_as_array [csv_as_array.length -2][18]) {
        $('#freshpricegoose').addClass('increase');
    } else {
        $('#freshpricegoose').addClass('decrease');
    }
    if (csv_as_array [csv_as_array.length -1][35] > csv_as_array [csv_as_array.length -2][35]) {
        $('#frozenpricegoose').addClass('increase');
    } else {
        $('#frozenpricegoose').addClass('decrease');
    }
}

updatePrices();


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
                },

            },
            highlighter: {
                   show: true,
                   sizeAdjust: 10,
                 },
            series: seriesOptions,

        });
            console.log('render');

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



    





