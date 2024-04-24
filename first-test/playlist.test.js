// Polyfill for TextEncoder
global.TextEncoder = require('util').TextEncoder;

// Create a mock document object
global.document = {
  createElement: jest.fn(() => ({
    src: ''
  })),
  head: {
    appendChild: jest.fn()
  }
};

// Create a mock window object
global.window = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn()
};

// Import the functions to be tested
const { loadYouTubePlayerAPI } = require('./scriptan.js');

describe('YouTube Player API Loader', () => {
  test('loadYouTubePlayerAPI function loads the YouTube Player API asynchronously', () => {
    loadYouTubePlayerAPI();
    expect(document.createElement).toHaveBeenCalledWith('script');
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://www.youtube.com/iframe_api'; // Set the src attribute
    expect(document.head.appendChild).toHaveBeenCalledWith(scriptElement);
  });
});

  // Mock the YT object and its Player constructor
  global.YT = {
    Player: jest.fn(() => ({
      loadPlaylist: jest.fn()
    }))
  };
  
  describe('YouTube Player Functions', () => {
    let containerId;
    let playlistId;
  
    beforeEach(() => {
      containerId = 'testContainer';
      playlistId = 'testPlaylistId';
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('createYouTubePlayer function creates a YouTube player', () => {
      createYouTubePlayer(playlistId, containerId);
      expect(global.YT.Player).toHaveBeenCalledWith(containerId, expect.any(Object));
    });
  
    test('togglePlaylist function toggles the visibility of playlist container', () => {
      const playlistContainer = document.createElement('div');
      playlistContainer.id = containerId;
      document.body.appendChild(playlistContainer);
  
      togglePlaylist(containerId);
      expect(playlistContainer.classList.contains('showPlaylist')).toBe(true);
  
      togglePlaylist(containerId);
      expect(playlistContainer.classList.contains('showPlaylist')).toBe(false);
    });
  
    test('playVideo function loads the playlist in the player', () => {
      const playerMock = new global.YT.Player();
      const expectedPlayerVars = {
        listType: 'playlist',
        list: playlistId
      };
  
      playVideo(playlistId, containerId);
      expect(playerMock.loadPlaylist).toHaveBeenCalledWith(expectedPlayerVars);
    });
  });
  