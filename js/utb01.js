$('#min_video').YTPlayer({
    videoURL: 'http://youtu.be/BsekcY04xvQ',
    containment: '.video_wrap',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
});

$('.pause').on('click', function () {
    $('#min_video').YTPPause();
})

$('.play').on('click', function () {
    $('#min_video').YTPPlay();
})