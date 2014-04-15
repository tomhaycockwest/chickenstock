
$(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		window.location.href = "http://staging.chickenstockapp.com/index-mobile.php";
		stop();
	}
});

$(document).ready(function(){
	$('.option').click(function() {
			var page = $(this).attr('href');
			$('.row').load(page);
			return false;
		});

	// Control Settings

	// Move Active Class
	$(function() {
		$(".option").click( function() {
		$(this).addClass('active').siblings().removeClass('active');
		});
	});

	// Toggle Dropdown Menu
	$('.dropdown-toggle').dropdown();

	$(document.body).on( 'click', '.dropdown-menu li', function( event ) {
		var $target = $( event.currentTarget );

		$target.closest('.weight')
			.find('[data-bind="label"]').text( $target.text())
				.end()
			.children('.dropdown-toggle').dropdown('toggle');
		return false;
	});

	// Sub-Nav active selector
	$('.sub-nav-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// About page appear and disappear

	$("#aboutClick").click( function() {
		$('#aboutContainer').toggleClass('appear');
	});

	$(".close").click( function() {
		$('#aboutContainer').removeClass('appear');
	});

	// Graph Settings
	var twentyTwelve =[['2013-01-02',182], ['2013-01-09',143], ['2013-01-16 8:00AM',146], ['2013-01-23 8:00AM',150], ['2013-01-30 8:00AM',152], ['2013-02-06 8:00AM',153], ['2013-02-13 8:00AM',151], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',162], ['2013-03-13 8:00AM',175], ['2013-03-20 8:00AM',172], ['2013-03-27 8:00AM',173], ['2013-04-03 8:00AM',165], ['2013-04-10 8:00AM',172], ['2013-04-17 8:00AM',166], ['2013-04-24 8:00AM',162], ['2013-05-01 8:00AM',163], ['2013-05-08 8:00AM',165], ['2013-05-15 8:00AM',161], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',170], ['2013-06-12 8:00AM',165], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',176], ['2013-07-03 8:00AM',173], ['2013-07-10 8:00AM',178], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',167], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',175], ['2013-08-14 8:00AM',169], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',165], ['2013-09-04 8:00AM',162], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',161], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',158], ['2013-10-09 8:00AM',155], ['2013-10-16 8:00AM',152], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',158], ['2013-12-11 8:00AM',142], ['2013-12-18 8:00AM',148], ['2013-12-25 8:00AM',146]];
	var twentyThirteen =[['2013-01-02 8:00AM',144], ['2013-01-09 8:00AM',146], ['2013-01-16 8:00AM',148], ['2013-01-23 8:00AM',148], ['2013-01-30 8:00AM',150], ['2013-02-06 8:00AM',150], ['2013-02-13 8:00AM',150], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',165], ['2013-03-13 8:00AM',170], ['2013-03-20 8:00AM',170], ['2013-03-27 8:00AM',170], ['2013-04-03 8:00AM',168], ['2013-04-10 8:00AM',170], ['2013-04-17 8:00AM',165], ['2013-04-24 8:00AM',160], ['2013-05-01 8:00AM',160], ['2013-05-08 8:00AM',160], ['2013-05-15 8:00AM',160], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',168], ['2013-06-12 8:00AM',170], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',172], ['2013-07-03 8:00AM',175], ['2013-07-10 8:00AM',175], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',170], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',172], ['2013-08-14 8:00AM',170], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',170], ['2013-09-04 8:00AM',168], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',165], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',152], ['2013-10-09 8:00AM',148], ['2013-10-16 8:00AM',145], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',155], ['2013-12-11 8:00AM',145], ['2013-12-18 8:00AM',145], ['2013-12-25 8:00AM',148]];
	var frozenDataTwelve=[['2013-01-02 8:00AM',142], ['2013-01-09 8:00AM',145], ['2013-01-16 8:00AM',135], ['2013-01-23 8:00AM',143], ['2013-01-30 8:00AM',140], ['2013-02-06 8:00AM',145], ['2013-02-13 8:00AM',150], ['2013-02-20 8:00AM',155], ['2013-02-27 8:00AM',152], ['2013-03-06 8:00AM',155], ['2013-03-13 8:00AM',155], ['2013-03-20 8:00AM',158], ['2013-03-27 8:00AM',160], ['2013-04-03 8:00AM',162], ['2013-04-10 8:00AM',162], ['2013-04-17 8:00AM',168], ['2013-04-24 8:00AM',170], ['2013-05-01 8:00AM',172], ['2013-05-08 8:00AM',172], ['2013-05-15 8:00AM',172], ['2013-05-22 8:00AM',174], ['2013-05-29 8:00AM',174], ['2013-06-05 8:00AM',174], ['2013-06-12 8:00AM',174], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',168], ['2013-07-03 8:00AM',162], ['2013-07-10 8:00AM',158], ['2013-07-17 8:00AM',158], ['2013-07-24 8:00AM',155], ['2013-07-31 8:00AM',148], ['2013-08-07 8:00AM',148], ['2013-08-14 8:00AM',152], ['2013-08-21 8:00AM',152], ['2013-08-28 8:00AM',150], ['2013-09-04 8:00AM',145], ['2013-09-11 8:00AM',140], ['2013-09-18 8:00AM',145], ['2013-09-25 8:00AM',145], ['2013-10-02 8:00AM',142], ['2013-10-09 8:00AM',145], ['2013-10-16 8:00AM',142], ['2013-10-23 8:00AM',142], ['2013-10-30 8:00AM',142], ['2013-11-06 8:00AM',142], ['2013-11-13 8:00AM',145], ['2013-11-20 8:00AM',145], ['2013-11-27 8:00AM',142], ['2013-12-04 8:00AM',142], ['2013-12-11 8:00AM',144], ['2013-12-18 8:00AM',146], ['2013-12-25 8:00AM',148]];
	var frozenDataThirteen =[['2013-01-02 8:00AM',144], ['2013-01-09 8:00AM',146], ['2013-01-16 8:00AM',148], ['2013-01-23 8:00AM',148], ['2013-01-30 8:00AM',150], ['2013-02-06 8:00AM',150], ['2013-02-13 8:00AM',150], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',165], ['2013-03-13 8:00AM',170], ['2013-03-20 8:00AM',170], ['2013-03-27 8:00AM',170], ['2013-04-03 8:00AM',168], ['2013-04-10 8:00AM',170], ['2013-04-17 8:00AM',165], ['2013-04-24 8:00AM',160], ['2013-05-01 8:00AM',160], ['2013-05-08 8:00AM',160], ['2013-05-15 8:00AM',160], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',168], ['2013-06-12 8:00AM',170], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',172], ['2013-07-03 8:00AM',175], ['2013-07-10 8:00AM',175], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',170], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',172], ['2013-08-14 8:00AM',170], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',170], ['2013-09-04 8:00AM',168], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',165], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',152], ['2013-10-09 8:00AM',148], ['2013-10-16 8:00AM',145], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',155], ['2013-12-11 8:00AM',145], ['2013-12-18 8:00AM',145], ['2013-12-25 8:00AM',148]];
	var freshDataTwelve =[['2013-01-02 8:00AM',142], ['2013-01-09 8:00AM',143], ['2013-01-16 8:00AM',146], ['2013-01-23 8:00AM',150], ['2013-01-30 8:00AM',152], ['2013-02-06 8:00AM',153], ['2013-02-13 8:00AM',151], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',162], ['2013-03-13 8:00AM',175], ['2013-03-20 8:00AM',172], ['2013-03-27 8:00AM',173], ['2013-04-03 8:00AM',165], ['2013-04-10 8:00AM',172], ['2013-04-17 8:00AM',166], ['2013-04-24 8:00AM',162], ['2013-05-01 8:00AM',163], ['2013-05-08 8:00AM',165], ['2013-05-15 8:00AM',161], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',170], ['2013-06-12 8:00AM',165], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',176], ['2013-07-03 8:00AM',173], ['2013-07-10 8:00AM',178], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',167], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',175], ['2013-08-14 8:00AM',169], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',165], ['2013-09-04 8:00AM',162], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',161], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',158], ['2013-10-09 8:00AM',155], ['2013-10-16 8:00AM',152], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',158], ['2013-12-11 8:00AM',142], ['2013-12-18 8:00AM',148], ['2013-12-25 8:00AM',146]];
	var freshDataThirteen =[['2013-01-02 8:00AM',144], ['2013-01-09 8:00AM',146], ['2013-01-16 8:00AM',148], ['2013-01-23 8:00AM',148], ['2013-01-30 8:00AM',150], ['2013-02-06 8:00AM',150], ['2013-02-13 8:00AM',150], ['2013-02-20 8:00AM',152], ['2013-02-27 8:00AM',160], ['2013-03-06 8:00AM',165], ['2013-03-13 8:00AM',170], ['2013-03-20 8:00AM',170], ['2013-03-27 8:00AM',170], ['2013-04-03 8:00AM',168], ['2013-04-10 8:00AM',170], ['2013-04-17 8:00AM',165], ['2013-04-24 8:00AM',160], ['2013-05-01 8:00AM',160], ['2013-05-08 8:00AM',160], ['2013-05-15 8:00AM',160], ['2013-05-22 8:00AM',165], ['2013-05-29 8:00AM',165], ['2013-06-05 8:00AM',168], ['2013-06-12 8:00AM',170], ['2013-06-19 8:00AM',172], ['2013-06-26 8:00AM',172], ['2013-07-03 8:00AM',175], ['2013-07-10 8:00AM',175], ['2013-07-17 8:00AM',175], ['2013-07-24 8:00AM',170], ['2013-07-31 8:00AM',170], ['2013-08-07 8:00AM',172], ['2013-08-14 8:00AM',170], ['2013-08-21 8:00AM',170], ['2013-08-28 8:00AM',170], ['2013-09-04 8:00AM',168], ['2013-09-11 8:00AM',168], ['2013-09-18 8:00AM',165], ['2013-09-25 8:00AM',160], ['2013-10-02 8:00AM',152], ['2013-10-09 8:00AM',148], ['2013-10-16 8:00AM',145], ['2013-10-23 8:00AM',150], ['2013-10-30 8:00AM',155], ['2013-11-06 8:00AM',155], ['2013-11-13 8:00AM',155], ['2013-11-20 8:00AM',155], ['2013-11-27 8:00AM',152], ['2013-12-04 8:00AM',155], ['2013-12-11 8:00AM',145], ['2013-12-18 8:00AM',145], ['2013-12-25 8:00AM',148]];

	$('#fresh').click( function(){
		freshUpdate();
	});

	$('#frozen').click( function(){
		frozenUpdate();
	});

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
renderGraph();

function freshUpdate() {
    twentyTwelve = freshDataTwelve;
    twentyThirteen = freshDataThirteen;
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
    renderGraph();
}

function frozenUpdate() {
    twentyTwelve = frozenDataTwelve;
    twentyThirteen = frozenDataThirteen;
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
    renderGraph();
}



// function doUpdate() {
//     if (newData.length) {
//         var val = newData.shift();
//         // $.post('/echo/html/', {
//         //     html: val
//         // },
//          function(response) {
//             setTimeout(doUpdate, 3000)
//             var newVal = new Number(response); /* update storedData array*/
//             storedData.push(newVal);
//             renderGraph();
//             log('New Value '+ newVal+' added')
//         })

//     } else {
//         log("All Done")
//     }
// }

// function log(msg) {
// $('body').append('<div>'+msg+'</div>')
// }


var result = $.csv.toArrays('http://staging.chickenstockapp.com/test.csv');
console.log(result);


}); // end document ready


