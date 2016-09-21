$(document).ready(function() {
	//OWL CAROUSEL
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true,
		slideSpeed : 1000,
    	paginationSpeed : 1000,
    	rewindSpeed : 1000,
    	pagination: false
    });
    // BUTTONS FOR CAROUSEL
    $(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
	//SLOW SCROLL TO ID 
	$("nav ul li a, .top").mPageScroll2id({
		offset: 10,
		scrollSpeed: 1000,
		container: $(".gallery")
	});
	//STICKY HEADER 
	$( '#header' ).fixedsticky();

});
