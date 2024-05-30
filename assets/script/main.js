// slickslider
$(document).ready(function () {
    $('.carousel').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        variableWidth: true,
        prevArrow: '<img src="/assets/image/voice/arrow_left_circle_fill.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/assets/image/voice/arrow_right_circle_fill.svg" class="slide-arrow next-arrow">',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// アコーディオンメニュー
$('.question').on('click', function (e) {
    var answer = $(this).next();
    answer.slideToggle();

    $(this).toggleClass('triangle-up')
});


// トップへ戻るボタン
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#button-to-top').fadeIn();
    } else {
        $('#button-to-top').fadeOut();
    }
});
