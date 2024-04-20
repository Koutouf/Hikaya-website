
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
    createYouTubePlayer('rfbd68nNSI4&list=PLJ0WU3XQoz4-x5FPOHh3s8nRkeal-4ED7', 'playlist3');
    createYouTubePlayer('nbilq32cWn0&list=PLJ0WU3XQoz48dYxaKhohHdaN-DDlTAIx3', 'playlist4');
    createYouTubePlayer('PLBKCKwPphJ34kTHHy-3nlVNNcVi5Bodai', 'playlist5');
}


// Function to show the playlist for a specific container
function showPlaylist(containerId) {
    // Hide all other playlists
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(item => {
        item.style.display = 'none';
    });
    // Show the selected playlist
    const playlist1 = document.getElementById(containerId);
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
// Function to show playlist selector after the page has fully loaded
window.addEventListener('load', function() {
    const playlistSelector = document.getElementById('playlistSelector');
    playlistSelector.style.display = 'flex';
    // Show the default playlist initially
    showPlaylist('playlist1');
    });

    // Function to enlarge the video player
function enlargePlayer() {
    const playerContainer = document.getElementById('playerContainer');
    const overlay = document.getElementById('overlay');

    playerContainer.classList.add('enlarged');
    overlay.style.display = 'block';
}

// Function to shrink the video player
function shrinkPlayer() {
    const playerContainer = document.getElementById('playerContainer');
    const overlay = document.getElementById('overlay');

    playerContainer.classList.remove('enlarged');
    overlay.style.display = 'none';
}




