$('.mainVisual .controls .pause').on('click', function () {
    $('.mainVisual video').trigger('pause')
})
$('.mainVisual .controls .play').on('click', function () {
    $('.mainVisual video').trigger('play')
})