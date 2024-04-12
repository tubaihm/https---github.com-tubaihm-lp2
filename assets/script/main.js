// カルーセル
$('.carousel').slick({
    autoplay: false,
    arrows: true,
    dots: true, // ドットを表示
    fade: true, // フェードで切り替え
});

// アコーディオンメニュー
$('.question').on('click', function (e) {
    var answer = $(this).next();
    answer.slideToggle();

    $(this).toggleClass('triangle-up')
});


// ページトップへ戻る
var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 600;
buttonToTop.on('click', function () {
    $("html, body").animate({
        scrollTop: position
    }, speed, "swing");
    return false;
});