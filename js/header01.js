$('h1').on('click', function () {
    console.log('작동함')
})

$(window).on('scroll', function () {
    console.log('스크롤 : ', $(window).scrollTop());
    // 스크롤된 양을 구해서 0보다 크면 클래스가 붙이고 아니면 클래스를 뗀다.
    // if(스크롤양 > 0) {클래스를 붙이고} else {클래스를 뗀}
    // 스크롤량을 구하기 : $(window).scrollTop()

    // if ($(window).scrollTop() > 0) { $('#header_scroll').addClass('on'); }
    // else { $('#header_scroll').removeClass('on'); }

    var sct = $(window).scrollTop();
    sct > 0 ? $('#header_scroll').addClass('on')
        : $('#header_scroll').removeClass('on');
})