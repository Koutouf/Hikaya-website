// Import the functions to be tested
const { display, selectInput } = require('./yourScriptFile.js');

describe('Keyword Search and Selection', () => {
  let mockResultBox;
  let mockInputBox;

  beforeEach(() => {
    // Create a mock HTML structure
    document.body.innerHTML = `
      <div class="resultbox"></div>
      <input class="input-box" type="text">
    `;
    
    // Assign the mock DOM elements
    mockResultBox = document.querySelector('.resultbox');
    mockInputBox = document.querySelector('.input-box');
  });

  afterEach(() => {
    // Clear the document body after each test
    document.body.innerHTML = '';
  });

    test('Displaying filtered keywords', () => {
    // Simulate user input
    mockInputBox.value = 'أ';
    mockInputBox.dispatchEvent(new Event('keyup'));

    // Check if the result box contains the expected keywords
    expect(mockResultBox.innerHTML).toContain('<li onclick="selectInput(\'الرئيسية\')">الرئيسية</li>');
    expect(mockResultBox.innerHTML).toContain('<li onclick="selectInput(\'أغاني أطفال\')">أغاني أطفال</li>');

    // Clear the input
    mockInputBox.value = '';
    mockInputBox.dispatchEvent(new Event('keyup'));

    // Check if the result box is cleared
    expect(mockResultBox.innerHTML).toBe('');
  });

  test('Selecting a keyword', () => {
    // Simulate clicking on a keyword
    selectInput('الرئيسية');

    // Check if the correct action is performed
    expect(window.location.replace).toHaveBeenCalledWith('7ikeya.html');
    expect(mockResultBox.innerHTML).toBe('');
  });

});

