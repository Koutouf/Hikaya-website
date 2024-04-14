// Import JSDOM for DOM manipulation
const { JSDOM } = require('jsdom');

// Create a DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
  userAgent: 'Node.js',
});
const { window } = dom;

// Set global variables for Jest
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Polyfill for requestAnimationFrame
global.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0);
};

// Polyfill for cancelAnimationFrame
global.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};
