var vidWin = Ti.UI.createWindow({
    title: 'Video View Demo',
    backgroundColor: '#fff'
});

var videoPlayer = Ti.Media.createVideoPlayer({
    top: 2,
    autoplay: true,
    backgroundColor: 'blue',
    height: 300,
    width: 300,
    mediaControlStyle: Ti.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode: Ti.Media.VIDEO_SCALING_ASPECT_FIT
});

videoPlayer.url = 'movie.mp4';
vidWin.add(videoPlayer);
vidWin.open();
