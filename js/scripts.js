$(document).ready(function () {

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



