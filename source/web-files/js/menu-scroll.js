$(document).scroll(function() {
	'use strict';

	/**
	 * @function isMobile
	 * detecta se o useragent e um dispositivo mobile
	 */
	function isMobile() {
		var tipoMobile;
		var userAgent = navigator.userAgent.toLowerCase();
		if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ) {
			tipoMobile = true;
		}else{
			tipoMobile = false;
		}

		return tipoMobile;
	}

	var y = $(this).scrollTop();

	if (!isMobile() && (y > 100)) {
		$('.m-menu').fadeIn();
	} else {
		$('.m-menu').fadeOut();
	}

});