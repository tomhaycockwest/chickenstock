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

$(document).ready(function () {
    


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
            frozen = 20;
            break;
        case "b1150g1350g":
            searchBy = 0;
            fresh = 4;
            frozen = 21;
            break;
        case "b1350g1550g":
            searchBy = 0;
            fresh = 5;
            frozen = 22;
            break;
        case "b1550g2000g":
            searchBy = 0;
            fresh = 6;
            frozen =23;
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

    var weight = [];
    var date = [];
    var index = 0;

    var arrayLength = 13;
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

        if (dyear == cyear) {
            if (freshFrozen == 'fresh') {

                mix[index][0] = dateNoHyphen;
                mix[index][1] = weightString;
                index ++;

            } else {

                mix[index][0] = dateNoHyphen;
                mix[index][1] = frozenCost;
                index ++;
            }


        } else {
            console.log('no year');

        }



    }

    console.log(mix);


    // mix = mix.substr(0, mix.length - 1);
    return mix;

}


$('.dropdown-menu li').click(function (e) {
    productType = e.target.id;
    console.log(productType);
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


    // Graph Settings
    // var twentyTwelve =[['04 Jan 13',182], ['2013-01-09',143], ['2013-01-16 8:00AM',146], ['2013-01-23 8:00AM',150], ['2013-01-30 8:00AM',152], ['2013-02-06 8:00AM',153], ['2013-02-13 8:00AM',151], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',162], ['2013-03-13 8:00AM',175], ['2013-03-20 8:00AM',172], ['2013-03-27 8:00AM',173], ['2013-04-03 8:00AM',165], ['2013-04-10 8:00AM',172], ['2013-04-17 8:00AM',166], ['2013-04-24 8:00AM',162], ['2013-05-01 8:00AM',163], ['2013-05-08 8:00AM',165], ['2013-05-15 8:00AM',161], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',170], ['2013-06-12 8:00AM',165], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',176], ['2013-07-03 8:00AM',173], ['2013-07-10 8:00AM',178], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',167], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',175], ['2013-08-14 8:00AM',169], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',165], ['2013-09-04 8:00AM',162], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',161], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',158], ['2013-10-09 8:00AM',155], ['2013-10-16 8:00AM',152], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',158], ['2013-12-11 8:00AM',142], ['2013-12-18 8:00AM',148], ['2013-12-25 8:00AM',146]];
    var twentyThirteen =[['2013-01-02 8:00AM',144], ['2013-01-09 8:00AM',146], ['2013-01-16 8:00AM',148], ['2013-01-23 8:00AM',148], ['2013-01-30 8:00AM',150], ['2013-02-06 8:00AM',150], ['2013-02-13 8:00AM',150], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',165], ['2013-03-13 8:00AM',170], ['2013-03-20 8:00AM',170], ['2013-03-27 8:00AM',170], ['2013-04-03 8:00AM',168], ['2013-04-10 8:00AM',170], ['2013-04-17 8:00AM',165], ['2013-04-24 8:00AM',160], ['2013-05-01 8:00AM',160], ['2013-05-08 8:00AM',160], ['2013-05-15 8:00AM',160], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',168], ['2013-06-12 8:00AM',170], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',172], ['2013-07-03 8:00AM',175], ['2013-07-10 8:00AM',175], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',170], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',172], ['2013-08-14 8:00AM',170], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',170], ['2013-09-04 8:00AM',168], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',165], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',152], ['2013-10-09 8:00AM',148], ['2013-10-16 8:00AM',145], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',155], ['2013-12-11 8:00AM',145], ['2013-12-18 8:00AM',145], ['2013-12-25 8:00AM',148]];

   

    var seriesOptions = [
                // twentyThirteen
                {
                    label:'2013',
                    color:'#bf4423',
                    shadow: false
                },
                {
                // twentyTwelve
                    label:'2012',
                    color:'#fd881b',
                    shadow: false
                }
            ];
    
    function renderGraph() {
        var twentyTwelve = getData();
        if (plot1) {
            plot1.destroy();
        }

    plot1 = $.jqplot('graph', [twentyTwelve, twentyThirteen], {
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
            min:'Jan, 2013',
            tickInterval:'1 month',
            }
        },
        series: seriesOptions,
    });
}

var plot1;

function freshUpdate() {
    seriesOptions = [
                    // twentyThirteen
                    {
                        label:'2013',
                        color:'#bf4423',
                        shadow: false
                    },
                    {
                    // twentyTwelve
                        label:'2012',
                        color:'#fd881b',
                        shadow: false
                    }
                ];
    freshFrozen = 'fresh';
    console.log(freshFrozen);


}

function frozenUpdate() {
    seriesOptions = [
                    // twentyThirteen
                    {
                        label:'2013',
                        color:'#0c5888',
                        shadow: false
                    },
                    {
                    // twentyTwelve
                        label:'2012',
                        color:'#0084d8',
                        shadow: false
                    }
                ];
    freshFrozen = 'frozen';
    console.log(freshFrozen);


}

});



    





