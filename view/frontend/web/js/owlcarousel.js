define([
    "jquery",
    "OwlCarousel-min"
], function($){
    return function (config, elem) {
        $(elem).addClass('owl-carousel');
        return $(elem).owlCarousel(config);
    }
});
