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
        }
    });
}

// Function to initialize the YouTube players when the API is ready
function onYouTubeIframeAPIReady() {
    // Load default playlists
    createYouTubePlayer('PLirNyJOCDA1xHk5rcwlZUzi_fT9uNKU8g', 'playlist1Container');
    createYouTubePlayer('PLhIKf_ywHzdyb5bfY1UPDzF7EPz_56qE3', 'playlist2Container');
    createYouTubePlayer('PLJ0WU3XQoz4-x5FPOHh3s8nRkeal-4ED7', 'playlist3Container');
    createYouTubePlayer('PLJ0WU3XQoz48dYxaKhohHdaN-DDlTAIx3', 'playlist4Container');
    createYouTubePlayer('PLBKCKwPphJ34kTHHy-3nlVNNcVi5Bodai', 'playlist5Container');
}

// Function to show/hide the playlist for a specific container
function togglePlaylist(containerId) {
    const playlistContainer = document.getElementById(containerId);
    playlistContainer.classList.toggle('showPlaylist');
}
// Function to play the video in the player when a playlist item is clicked
function playVideo(playlistId, containerId) {
    players[containerId].loadPlaylist({
        listType: 'playlist',
        list: playlistId
    });
}
document.addEventListener('DOMContentLoaded', loadYouTubePlayerAPI);

// Load the YouTube Player API
loadYouTubePlayerAPI();

// Function to add event listeners to playlist items
window.addEventListener('load', function() {
    const playlistItems = document.querySelectorAll('.playlistItem');
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const containerId = item.id.replace('Item', 'Container');
            togglePlaylist(containerId);
            playVideo(item.dataset.playlistId, containerId);
        });
    });
});
