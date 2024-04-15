// slickslider
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '<img src="/assets/image/voice/arrow-left-circle-fill.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/assets/image/voice/arrow-right-circle-fill.svg" class="slide-arrow next-arrow">',
        infinite: true, 
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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


$(document).ready(function() {
    $('#button-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#button-to-top').fadeIn();
        } else {
            $('#button-to-top').fadeOut();
        }
    });
});