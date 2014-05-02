
$(function() {
	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		window.location.href = "http://staging.chickenstockapp.com/index-mobile.php";
		stop();
	}
});

// resize graph for iPad
$(function() {
	if( /iPad/i.test(navigator.userAgent) ) {
		$( "#graph" ).replaceWith( "<div id='graph' style='width:770px; height:550px'></div>" );
	}
});

$(document).ready(function(){
	$('.option').click(function() {
			var page = $(this).attr('href');
			$('.row').load(page);
			setTimeout(function(){updatePrices();}, 500);
			return false;

		});

	// Control Settings

	// Mobile Nav Selector
    $(".option").click( function() {
    $(this).addClass('active').siblings().removeClass('active');
    });

    $('.chicken').button('toggle');

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



}); // end document ready


