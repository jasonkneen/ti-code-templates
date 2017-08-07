var win = Ti.UI.createWindow({
    title:'Audio Test',
    backgroundColor:'#fff',
    layout: 'vertical'
});

var startStopButton = Ti.UI.createButton({
    title:'Start/Stop Streaming',
    top:10,
    width:200,
    height:40
});

var pauseResumeButton = Ti.UI.createButton({
    title:'Pause/Resume Streaming',
    top:10,
    width:200,
    height:40,
    enabled:false
});

win.add(startStopButton);
win.add(pauseResumeButton);

// allowBackground: true on Android allows the
// player to keep playing when the app is in the
// background.
var audioPlayer = Ti.Media.createAudioPlayer({
    url: 'www.example.com/podcast.mp3',
    allowBackground: true
});

startStopButton.addEventListener('click',function() {
    // When paused, playing returns false.
    // If both are false, playback is stopped.
    if (audioPlayer.playing || audioPlayer.paused)
    {
        audioPlayer.stop();
        pauseResumeButton.enabled = false;
        if (Ti.Platform.name === 'android')
        {
            audioPlayer.release();
        }
    }
    else
    {
        audioPlayer.start();
        pauseResumeButton.enabled = true;
    }
});

pauseResumeButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.start();
    }
    else {
        audioPlayer.pause();
    }
});

audioPlayer.addEventListener('progress',function(e) {
    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
});

audioPlayer.addEventListener('change',function(e)
{
    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
});

win.addEventListener('close',function() {
    audioPlayer.stop();
    if (Ti.Platform.osname === 'android')
    {
        audioPlayer.release();
    }
});

win.open();
