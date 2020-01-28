$(document).ready(function () {

    // Aos animation
    AOS.init({
        duration: 1000
    });

    // Meet our Team Carousel
    $('.meet-out-team-container .row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        variableWidth: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // Show submit message
    $('.contact-form-submit-container').hide();
    $('.contact-form-inner-container .primary-btn').on('click', function() {
        $('.contact-form-inner-container').fadeOut('slow');
        $('.contact-form-submit-container').fadeIn('slow');
    });

});