let players = {};

// Function to load the YouTube Player API asynchronously
function loadYouTubePlayerAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Function to create a YouTube player
function createYouTubePlayer(playlistId, containerId) {
    players[containerId] = new YT.Player(containerId, {
        height: '360',
        width: '640',
        playerVars: {
            listType: 'playlist',
            list: playlistId
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to initialize the YouTube players when the API is ready
function onYouTubeIframeAPIReady() {
    // Load default playlists
    createYouTubePlayer('PLirNyJOCDA1xHk5rcwlZUzi_fT9uNKU8g', 'playlist1');
    createYouTubePlayer('PLhIKf_ywHzdyb5bfY1UPDzF7EPz_56qE3', 'playlist2');
    // Load additional playlists if needed
}


// Function to show the playlist for a specific container
function showPlaylist(containerId) {
    // Hide all other playlists
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(item => {
        item.style.display = 'none';
    });
    // Show the selected playlist
    const playlist = document.getElementById(containerId + 'Container');
    playlist.style.display = 'block';
}

// Function to pause other players when one player starts playing
function onPlayerReady(event) {
    const currentPlayerId = event.target.a.id;
    for (const playerId in players) {
        if (playerId !== currentPlayerId) {
            players[playerId].pauseVideo();
        }
    }
}
// Load the YouTube Player API
loadYouTubePlayerAPI();
