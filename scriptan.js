document.addEventListener('DOMContentLoaded', function() {
  const playlistId = 'PLJ0WU3XQoz49AlTzxAltvgk0Kc_hqKGvg'; // Playlist ID
  const apiKey = 'AIzaSyDZevWIGs6AKGt6Mhh2QSmwBA7rKb0VSdc'; // Your YouTube Data API key

  // Fetch playlist data from YouTube Data API
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Parse playlist data and append items to the playlist
  })
  .catch(error => console.error('Error fetching playlist:', error));
  // Event listener to handle video clicks
  const playlistItems = document.querySelectorAll('.playlist a');
  const videoFrame = document.getElementById('videoFrame');

  playlistItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const videoId = item.getAttribute('data-video-id');
      loadVideo(videoId);
    });
  });

  function loadVideo(videoId) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    videoFrame.src = videoSrc;
  }
  });

  function loadVideo(videoId) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    videoFrame.src = videoSrc;
  }
;
