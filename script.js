$('document').ready(function () {

    // Spoiller

    $('.spoiller_text').hide()

    $('.spoiller_header').on('click', function () {
        $(this).next('.spoiller_text').slideToggle().prev('.spoiller_text').slideUp()
    })

    // Accordion

    $('.accordion').accordion({
        heightStyle: 'content'
    });

    // To top button

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 20) {
            $('.to_top').fadeIn()
        } else {
            $('.to_top').fadeOut()
        }
    })

    $('.to_top').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 50)
    })
})