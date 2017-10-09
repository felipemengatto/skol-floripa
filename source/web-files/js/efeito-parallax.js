'use strict';

(function(){

	function scrollBanner() {
		var scrollPos;
		var headerText = document.querySelector('.m-index-box');
		scrollPos = window.scrollY;

		if (scrollPos <= 400) {
			headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
			headerText.style.opacity = 1 - (scrollPos/150);
		}
	}

	window.addEventListener('scroll', scrollBanner);

})();