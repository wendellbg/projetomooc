// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;
var player2;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player("video", {
        events: {
            // call this function when player is ready to use
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
    player2 = new YT.Player("video2", {
        events: {
            // call this function when player is ready to use
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });

    // when video play
    function onPlayerStateChange(event) {
        if(event.data === 1) {
            player2.playVideo();
            player.playVideo();
        }else if(event.data === 2) {
            player2.pauseVideo();
            player.pauseVideo();
        }

    }


}

function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
        player.playVideo();
        player2.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () {
        player.pauseVideo();
        player2.pauseVideo();
    });

    // var stopButton = document.getElementById("video-exibir");
    // stopButton.addEventListener("click", function () {
    //     player.stopVideo();
    //     player2.stopVideo();
    //     player.playVideo();
    //     player2.playVideo();
    // });
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);