
// Toggle Dropdown Menu
$('.dropdown-toggle').dropdown();

// Move Active Class
$(function() {
  $(".option").click( function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});


$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
	var $target = $( event.currentTarget );

	$target.closest( '.weight' )
		.find( '[data-bind="label"]' ).text( $target.text() )
			.end()
		.children( '.dropdown-toggle' ).dropdown( 'toggle' );
	return false;
 
});