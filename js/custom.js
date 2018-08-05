jQuery(document).ready(function () {
	"use strict";
	(function($) {
	    $.fn.menumaker = function(options) {
	        var cssmenu = $(this),
	            settings = $.extend({
	                format: "dropdown",
	                sticky: false
	            }, options);
	        return this.each(function() {
	            $(this).find(".button").on('click', function() {
	                $(this).toggleClass('menu-opened');
	                var mainmenu = $(this).next('ul');
	                if (mainmenu.hasClass('open')) {
	                    mainmenu.slideToggle().removeClass('open');
	                } else {
	                    mainmenu.slideToggle().addClass('open');
	                    if (settings.format === "dropdown") {
	                        mainmenu.find('ul').show();
	                    }
	                }
	            });
	            cssmenu.find('li ul').parent().addClass('has-sub');
	            var multiTg;
	            multiTg = function() {
	                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
	                cssmenu.find('.submenu-button').on('click', function() {
	                    $(this).toggleClass('submenu-opened');
	                    if ($(this).siblings('ul').hasClass('open')) {
	                        $(this).siblings('ul').removeClass('open').slideToggle();
	                    } else {
	                        $(this).siblings('ul').addClass('open').slideToggle();
	                    }
	                });
	            };
	            if (settings.format === 'multitoggle') multiTg();
	            else cssmenu.addClass('dropdown');
	            if (settings.sticky === true) cssmenu.css('position', 'fixed');
	            var resizeFix;
	            resizeFix = function() {
	                var mediasize = 1000;
	                if ($(window).width() > mediasize) {
	                    cssmenu.find('ul').show();
	                }
	                if ($(window).width() <= mediasize) {
	                    cssmenu.find('ul').hide().removeClass('open');
	                }
	            };
	            resizeFix();
	            return $(window).on('resize', resizeFix);
	        });
	    };
	})(jQuery);
	 $("#easy-menu").menumaker({
        format: "multitoggle"
    });

	/* -----------------------------------
	**  SLider
	-------------------------------------*/
	(function( $ ) {
		//Function to animate slider captions
		function doAnimations( elems ) {
			//Cache the animationend event in a variable
			var animEndEv = 'webkitAnimationEnd animationend';
			elems.each(function () {
				var $this = $(this),
					$animationType = $this.data('animation');
				$this.addClass($animationType).one(animEndEv, function () {
					$this.removeClass($animationType);
				});
			});
		}

		//Variables on page load
		var $myCarousel = $('#carousel-example-generic'),
			$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

		//Initialize carousel
		$myCarousel.carousel();

		//Animate captions in first slide on page load
		doAnimations($firstAnimatingElems);

		//Pause carousel
		$myCarousel.carousel('pause');


		//Other slides to be animated on carousel slide event
		$myCarousel.on('slide.bs.carousel', function (e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});

	})(jQuery);

	/** =====================================
    *   Search Box
    * =====================================**/
   	$('.search-box .search-icon').on('click', function(e) {
        e.preventDefault();
        $('.top-search-input-wrap').addClass('show');
   	});
   	$(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on('click', function(){
        $('.top-search-input-wrap').removeClass('show');
   	});

	/*** =====================================
    * Sidebar Toggle
    * =====================================***/
	$('#humbarger').on('click',function(){
         $('.hidden-sidebar').animate().toggleClass('sidebar-show');
    });
	$('#hidden-sidebar-close i').on('click', function(){
		$('.hidden-sidebar').animate().removeClass('sidebar-show');
	});
    var windowHeight = $(window).height();
    $(".hidden-sidebar").css({"height": windowHeight});

    $(window).on('resize',function(){
		var windowHeight = $(window).height();
	    $(".hidden-sidebar").css({"height": windowHeight});
    });
	/*** =====================================
    * Nice Scroll
    * =====================================***/
	if( $('.hidden-sidebar').length ){
		$(".hidden-sidebar").niceScroll({
		    cursorcolor: "#94c501", // change cursor color in hex
		    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
		    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
		    cursorwidth: "0", // cursor width in pixel (you can also write "5px")
		    cursorborder: "0px solid #fff", // css definition for cursor border
		    cursorborderradius: "0px", // border radius in pixel for cursor
		});
	};

	/** =====================================
	*  Gallery Post
	* ===================================== **/
	if( $('.blog-gallery-post').length ){
		$(".blog-gallery-post").owlCarousel({
			'items':1,
			'loop':true,
			'nav':true,
			'dots':false,
			'navText': [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
		});
	};
	/** =====================================
	*  Match Height
	* ===================================== **/
	if( $('.row-eq-height').length ){
		$('.row-eq-height >div').matchHeight();
	}


});
