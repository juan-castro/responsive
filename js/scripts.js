// Open nav animation
function openNav() {
	$('#tabs-links').addClass('tabsFixed').animate({ top: 228 }, 500);
	$('.main').addClass('contentOffset');
	$('#header-wrap').stop().animate({ height: 228 }, 500);
	$('.section-title h2').stop().animate({ 'margin-top': 30, 'margin-right': 0, 'margin-bottom': 16, 'margin-left': 23 }, 300);
	$('.headermain').stop().animate({ 'padding-top': 21, 'padding-right': 21, 'padding-bottom': 0, 'padding-left': 23, height: 92 }, 650);
	$('.logo img').stop().animate({ width: 115 }, 800);
	$('.fixedNav').stop().animate({ 'top': 325 }, 500);
	$('.breadcrumb, a.view-full-menu').stop().animate({ opacity: 0 }, 500);
	$('.secondary-nav, .sitesearch, .primary-nav').stop().animate({ opacity: 1 }, 500, function () { $(this).css('display', 'block'); });
	$('.loc-toggle').slideDown(500);
}

// Close nav animation
function closeNav() {
	$('#header-wrap').stop().animate({ height: 110 }, 500);
	$('.section-title h2').stop().animate({ 'margin-top': 10, 'margin-right': 0, 'margin-bottom': 9, 'margin-left': 23 }, 300);
	$('.headermain').addClass('closedNav').stop().animate({ 'padding-top': 8, 'padding-right': 21, 'padding-bottom': 9, 'padding-left': 23, height: 41 }, 650);
	$('.logo img').stop().animate({ width: 60 }, 800);
	$('.tabsFixed').stop().animate({ top: 110 }, 500);
	$('.fixedNav').stop().animate({ 'top': 200 }, 500);
	$('.breadcrumb, a.view-full-menu').stop().animate({ opacity: 1 }, 500);
	$('.secondary-nav, .sitesearch, .primary-nav').stop().animate({ opacity: 0 }, 500, function () { $(this).css('display', 'none'); });
	$('.loc-toggle').slideUp(500);
}

$(document).ready(function () {
	var browserWidth = jQuery(window).width();

	// Nav functionality on larger screens
    if (browserWidth > 767) {
    	openNav();
      
      	$('#header-wrap').addClass('fixed');
      
	    // Click event on view full menu button
		$(".headermain, .view-full-menu").click(function () {
			if (navOpen) {
		  		var position = $(window).scrollTop();
		  		if (position > 0) {
				    closeNav();
				    $('html, body').animate({ scrollTop: $(window).scrollTop() + 118 }, 500);
				    navOpen = false;
		  		}
			} else {
			  openNav();
			  $('html, body').animate({ scrollTop: $(window).scrollTop() - 118 }, 500);
			  navOpen = true;
			}
		});

		$('ul#nav li.item a').click(function (e) {
			if (navOpen) 
				closeNav();
			e.preventDefault();
		});

		// Stop propagation when element is clicked
		$('.headermain li,.headermain .sitesearch,.headermain .logo, .headermain .sitesearch-mod,.view-full-menu, .megamenu-mod').click(function (event) {
			event.stopPropagation();
		});

		// Waypoint to open/close nav
		$('#waypoint1').waypoint(function (direction) {
			if (direction === 'up') {
				$('.headermain').removeClass('closedNav');
				openNav();
				navOpen = true;
			}
			if (direction === 'down') {
				closeNav();
				navOpen = false;
			}
		});
	}

	// Site search
	$(".sitesearch-mod" ).hide();
	$(".sitesearch").click(function() {
	    $(".sitesearch-mod").show("500",function() {
			$("#sitesearch").focus()
		});
	});

	// Close site search
	$(".closesearch").click(function(){
	    $(".sitesearch-mod" ).fadeOut();
	});

	// jCarouselLite plugin
	$('div.tabContentContainerB').jCarouselLite({
        btnNext: '.tabOverlay, .nextArticle',
        btnPrev: '.featmoveLeft',
        visible: 4,
        scroll: 1,
        speed: 800,
        auto: false,
        autoWidth: false,
        responsive: true
    });

	// Contact info flip card
    $('.hover').hover(function () {
        $(this).addClass('flip');
    }, function () {
        $(this).removeClass('flip');
    });

    // Contact info flip card - if IE
    if ($.browser.msie) {
        $('.front').click(function () {
            $('.front').fadeIn();
            $(this).fadeOut();
            $(this).siblings('.back').fadeIn();
        });
        $('.back').click(function () {
            $(this).siblings('.front').fadeIn();
            $(this).fadeOut();
        });
    } else {
        $('.click').click(function () {
            $('.click').not(this).removeClass('flip');
            $(this).toggleClass('flip');
        });
    }

    // Stop flip if user clicks link
    $('.contact-info a').click(function (e) {
        e.stopPropagation();
    });

});



