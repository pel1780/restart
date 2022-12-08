$(function () {
    $('.left_slide').slick({
        fade: true,

        // fade는 슬라이드가 변경될때 주는 효과 (vertical, fade, 기본)

        asNavFor: '.right_slide',
        arrows: false,
    });
    var barWidth = $('.bar').width();
    console.log(barWidth)

    $('.right_slide').on('init afterChange', function (e, s, c) {
        var bb = barWidth / s.slideCount;
        $('.bar span').css({ width: bb })
        $('.bar2 span').css({ width: bb })
        $('.bar2 span').css({ width: bb * (c + 1) })
        $('.bar span').css({ left: bb * c })

        $('.num span').text(c ? (c + 1) : 1);
        $('.num strong').text(s.slideCount);
    });
    $('.right_slide').slick({
        slidesToShow: 5,
        asNavFor: '.left_slide',
        arrows: false,
    });

    $('.arrows i:first-child').on('click', function () {
        $('.left_slide').slick('slickPrev');
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.left_slide').slick('slickNext');
    });
});