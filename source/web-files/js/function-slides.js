(function(){

	var slider = $('.m-camarote-skol-slider').unslider();

	var i = 0;

	slider
	.on('swipeleft', function(e) {
		slider.prev();
	})
	.on('swiperight', function(e) {
		slider.next();
	});


})();