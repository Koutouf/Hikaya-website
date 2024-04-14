// Import the module you want to test
const { display, selectInput } = require('../search.js');

// Mock document.querySelector to simulate DOM elements
document.querySelector = jest.fn();

// Mock window.location.replace
global.window.location.replace = jest.fn();

describe('display', () => {
    it('should display the provided list of keywords', () => {
        // Mock result box element
        const mockResultBox = {
            innerHTML: ''
        };

        // Call the display function with sample data
        const sampleData = ['الرئيسية', 'صور متحركة'];
        display(sampleData);

        // Check if the resultsBox contains the expected content
        expect(mockResultBox.innerHTML).toBe('<ul><li onclick="selectInput(\'الرئيسية\')">الرئيسية</li><li onclick="selectInput(\'صور متحركة\')">صور متحركة</li></ul>');
    });
});

describe('selectInput', () => {
    it('should redirect to the appropriate page based on the selected keyword', () => {
        // Call the selectInput function with a sample keyword
        selectInput('الرئيسية');

        // Check if window.location.replace was called with the expected URL
        expect(window.location.replace).toHaveBeenCalledWith('7ikeya.html');
    });

    it('should clear the result box after selecting a keyword', () => {
        // Mock result box element
        const mockResultBox = {
            innerHTML: ''
        };

        // Call the selectInput function with a sample keyword
        selectInput('الرئيسية');

        // Check if the result box is cleared
        expect(mockResultBox.innerHTML).toBe('');
    });
});
