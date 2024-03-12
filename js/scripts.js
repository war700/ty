$(document).ready(function() {
	// Stuff to do as soon as the DOM is ready;

	// Set background-color for current active tr
	$('td .inputText').focus(function() {
		$(this).parents('tr').addClass('activeRow');

		$(this).blur(function() {
			$(this).parents('tr').removeClass('activeRow');
		});
	});

	// Make subnavigation links unclickable
	$('#subnavigation a').click(function() {
		return false
	}).css('cursor','default').css('outline','none');
	
	// Fixed width for first column
	$('#budgetplanner table tr td:first-child').css('width', '165px');
});
