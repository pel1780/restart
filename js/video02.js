// var swc = true;

// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if (swc) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     };
//     // 스위치 만들기 참거짓을 반복하기

//     swc = !swc;
// }) 클래스와 무관하게 참 거짓으로 스위치를 사용


// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if ($(this).hasClass('on')) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     };
//     // 스위치 만들기 참거짓을 반복하기 클래스로 구분하여 사용
// })

$('.control').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('video').trigger('pause')
        : $('video').trigger('play');
});
    // 스위치 만들기 참거짓을 반복하기
