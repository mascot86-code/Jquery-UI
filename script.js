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

    //Counter

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now))
            }
        })
    })

    // Cookie

    function showText(text) {
        $('.notice').text(text)
    }

    $('.hide_cookie').on('click', function () {
        $('.notice').fadeOut(1000, showText('Cообщение автоматически скрыто, спасибо!'))
        $('.hide_cookie').fadeOut(300)
    })

    // Articles

    $('.next').on('click', function () {
        $('.articles').find('.active').next().addClass('active')
        $('.articles').find('.active').prev().removeClass('active')
    })

    $('.prev').on('click', function () {
        $('.articles').find('.active').prev().addClass('active')
        $('.articles').find('.active').next().removeClass('active')
    })

    $('.article_text').each(function (index, item) {
        $('.symbols').eq(index).text(`Сharacters per line ${item.innerText.length}`)
    })

    // Input value. Styles without CSS


    $('form').css({ 'margin-top': 20 })

    $('input[type="submit"]').css({
        'width': 120,
    })

    $('input[type="text"]').on('change', function () {
        let value = $(this).val()
        let length = value.length

        $('input[type="submit"]').on('click', function () {
            alert(value + ' ' + length + ' сharacters')
        })
    })

    let list = $('.list_items')
    let ul = `<ol>
    <li>List 1</li>
    <li>List 2</li>
    <li>List 3</li>
    <li>List 4</li>
    </ol>`

    list.append(ul).css({'margin-top': 20});
})