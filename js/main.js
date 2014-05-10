// resize graph for iPad
var current_width = $(window).width();
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

	if (current_width < 1824) {
		$( "#graph" ).replaceWith( "<div id='graph' style='width:1155px; height:625px'></div>" );
	} 
	if (current_width < 1440) {
		$( "#graph" ).replaceWith( "<div id='graph' style='width:1000px; height:525px'></div>" );
	}
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


	// Tree Menu 
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });





}); // end document ready


