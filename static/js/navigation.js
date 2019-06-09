$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0};
	
	/* To scroll the page */
	$('#header ul li a').click(function(){  
		var href = $(this).attr("href");
		$('html, body').animate({
			scrollTop:$(href).offset().top
		}, 'slow');
		return false;
	});
	
	/* To change the nav menu */
	$('.slide').each(function(i) {
		var position = $(this).position();
		$(this).scrollspy({
			min: position.top - 1,
			max: position.top + $(this).height() - 1,
			onEnter: function(element, position) {
				$("header nav ul li a[href=#" + element.id + "]").attr('class', 'active');
			},
			onLeave: function(element, position) {
				$("header nav ul li a[href=#" + element.id + "]").attr('class', '');
			}
		});
	});
	
	//Mobile device
	// Create the dropdown base
	$("<select />").appendTo("#header nav");

	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Menu"
	}).appendTo("#header nav select");

	// Populate dropdown with menu items
	$("#header nav a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#header nav select");
	});
	
	$("#header nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
});	