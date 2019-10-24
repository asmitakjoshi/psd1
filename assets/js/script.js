(function($) {
    "use strict";
    $(document).ready(function () {
        $('.counts').counterUp({
            delay: 10,
            time: 1000
        });
    });
})(jQuery);

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
        $('.top-slide').fadeIn();
    } else {
        $('.top-slide').fadeOut();
    }
});
$('.top-slide').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

new WOW().init();

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});

$(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll >= 60) {
         $(".navbar").addClass("darkHeader");
     } else {
         $(".navbar").removeClass("darkHeader");
     }
 });

 $('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
});