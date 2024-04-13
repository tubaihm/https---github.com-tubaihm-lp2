// カルーセル
$('.carousel').slick({
    autoplay: false,
    arrows: true,
    dots: true,
    fade: true,
    prevArrow: '<img src="/assets/image/voice/arrow-left-circle-fill.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/voice/arrow-right-circle-fill.svg" class="slide-arrow next-arrow">',
});

// アコーディオンメニュー
$('.question').on('click', function (e) {
    var answer = $(this).next();
    answer.slideToggle();

    $(this).toggleClass('triangle-up')
});


// // ページトップへ戻る
// var buttonToTop = $('#button-to-top');
// var position = 0;
// var speed = 600;
// buttonToTop.on('click', function () {
//     $("html, body").animate({
//         scrollTop: position
//     }, speed, "swing");
//     return false;
// });