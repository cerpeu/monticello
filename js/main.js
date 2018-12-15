;(function ($) {
    "use strict";

    const bestSlider = $('.ba-section');

    bestSlider.slick({
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        prevArrow: '.ba-best-slider-prev',
        nextArrow: '.ba-best-slider-next',
        dots: true
    });

})(jQuery);
