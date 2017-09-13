(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		function clearHeader() {
			$('.clear-header').css('padding-top', $('header').outerHeight());
		}
		
		function navlineHeight() {
			$('nav ul').css('height', $('.logo-img').outerHeight());
		}
		
		function resizeBanner() {
			$('.hero').outerHeight($(window).height());
		}
		
		$(document).ready(function () {
		    resizeBanner();
		    navlineHeight();
		    clearHeader();
		});
		
		$(window).resize(function () {
		    resizeBanner();
		    clearHeader();
		});
		
		var header = $('header');
			$(window).scroll(function() {    
		  	var scroll = $(window).scrollTop();
		  	if (scroll >= 50) {
		  	    header.addClass('light');
		  	} else {
		  	    header.removeClass('light');
		  	}
		  	navlineHeight();
		  });
		
	});
	
})(jQuery, this);
