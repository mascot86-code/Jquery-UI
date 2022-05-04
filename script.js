$('document').ready(function () {
    $('.spoiller_text').hide()

    $('.spoiller_header').on('click', function () {
        $(this).next('.spoiller_text').slideToggle().prev('.spoiller_text').slideUp()
    })

    $('.accordion').accordion({
        heightStyle: 'content'
    });

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