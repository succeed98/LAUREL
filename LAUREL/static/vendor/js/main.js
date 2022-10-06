(function ($) {
"use strict";

// window-load
$(window).on('load', function () {
    $("#loading").fadeOut(500);
});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

// sticky-header
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});

/*-------------------------------------
element animation
// ------------------------------------ */
// if ($('section').hasClass('features-area')) {
//     var distance = $('.features-area').offset().top;

//     $(window).on('scroll', function () {
//         var top_distance = $(window).scrollTop() + -0;
//         if (top_distance >= distance) {
//             $('.features-area .features-shape').css('right', '20px');
//         } else {
//             $('.features-area .features-shape').css('right', '-20%');
//         }
//     });
// }



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 992, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


$('.js-tilt').tilt();
// counterUp

$('.count').counterUp({
	delay: 10,
	time: 2000
});

// testimonial
$('.testimonial-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
	asNavFor: '.testimonial-nav',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
			}
		},
	]
});
$('.testimonial-nav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.testimonial-active',
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
});


// progress
$('#wp-developer').circleProgress({
	value: 0.69,
	size: 80,
	thickness: 10,
	emptyFill: '#f6f6f0',
	fill: '#764af3'
}).on('circle-animation-progress', function (event, progress) {
	$(this).find('.progressbar-percetage').html(Math.round(69 * progress) + '<i>%</i>');
});
$('#app-dev').circleProgress({
	value: 0.93,
	size: 80,
	thickness: 10,
	emptyFill: '#f6f6f0',
	fill: '#e6513a'
}).on('circle-animation-progress', function (event, progress) {
	$(this).find('.progressbar-percetage').html(Math.round(93 * progress) + '<i>%</i>');
});
$('#android-dev').circleProgress({
	value: 0.76,
	size: 80,
	thickness: 10,
	emptyFill: '#f6f6f0',
	fill: '#5ab92b'
}).on('circle-animation-progress', function (event, progress) {
	$(this).find('.progressbar-percetage').html(Math.round(76 * progress) + '<i>%</i>');
});
$('#iso-dev').circleProgress({
	value: 0.89,
	size: 80,
	thickness: 10,
	emptyFill: '#f6f6f0',
	fill: '#25c4f8'
}).on('circle-animation-progress', function (event, progress) {
	$(this).find('.progressbar-percetage').html(Math.round(89 * progress) + '<i>%</i>');
});


// brand-active
$('.brand-active').slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 2500,
	autoplay: true,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// portfolio-active
$('.portfolio-active').slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 3000,
	autoplay: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// parice tabele
$('.pricing-box').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.pricing-box').removeClass('active');
})


// isotop
$('.project-active').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.project-active,.blog-masonary').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  fitRows: {
		gutter: 1
	  },

	});
	$('.portfolio-menu').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp',
	topDistance: '300',
	topSpeed: 300,
	animation: 'fade',
	animationInSpeed: 200,
	animationOutSpeed: 200,
	scrollText: '<i class="fas fa-level-up-alt"></i>',
	activeOverlay: false,
});

// WOW active
new WOW().init();


})(jQuery);