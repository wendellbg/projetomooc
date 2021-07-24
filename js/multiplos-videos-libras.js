// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player1a;
var player1b;
var player2a;
var player2b;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player1a = new YT.Player("video1a", {
        events: {
            onStateChange: onPlayerStateChange1
        }
    });
    player1b = new YT.Player("video1b", {
        events: {
            onStateChange: onPlayerStateChange1
        }
    });

    player2a = new YT.Player("video2a", {
        events: {
            onStateChange: onPlayerStateChange2
        }
    });
    player2b = new YT.Player("video2b", {
        events: {
            onStateChange: onPlayerStateChange2
        }
    });

    player3a = new YT.Player("video3a", {
        events: {
            onStateChange: onPlayerStateChange3
        }
    });
    player3b = new YT.Player("video3b", {
        events: {
            onStateChange: onPlayerStateChange3
        }
    });

    player4a = new YT.Player("video4a", {
        events: {
            onStateChange: onPlayerStateChange4
        }
    });
    player4b = new YT.Player("video4b", {
        events: {
            onStateChange: onPlayerStateChange4
        }
    });

    player5a = new YT.Player("video5a", {
        events: {
            onStateChange: onPlayerStateChange5
        }
    });
    player5b = new YT.Player("video5b", {
        events: {
            onStateChange: onPlayerStateChange5
        }
    });

}

// when video play or pause
function onPlayerStateChange1(event) {
    if(event.data === 1) {
        player1b.playVideo();
        player1a.playVideo();
    }else if(event.data === 2) {
        player1b.pauseVideo();
        player1a.pauseVideo();
    }

}

// when video play or pause
function onPlayerStateChange2(event) {
    if(event.data === 1) {
        player2b.playVideo();
        player2a.playVideo();
    }else if(event.data === 2) {
        player2b.pauseVideo();
        player2a.pauseVideo();
    }
}

// when video play or pause
function onPlayerStateChange3(event) {
    if(event.data === 1) {
        player3b.playVideo();
        player3a.playVideo();
    }else if(event.data === 2) {
        player3b.pauseVideo();
        player3a.pauseVideo();
    }
}

// when video play or pause
function onPlayerStateChange4(event) {
    if(event.data === 1) {
        player4b.playVideo();
        player4a.playVideo();
    }else if(event.data === 2) {
        player4b.pauseVideo();
        player4a.pauseVideo();
    }
}

// when video play or pause
function onPlayerStateChange5(event) {
    if(event.data === 1) {
        player5b.playVideo();
        player5a.playVideo();
    }else if(event.data === 2) {
        player5b.pauseVideo();
        player5a.pauseVideo();
    }
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);