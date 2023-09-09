import { JSDOM } from 'jsdom';
import allItemsCount from './allItemsCount.js';
import fetchData from './fetchData.js';

// Create a DOM environment before running tests
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;

// Mock fetchData module
jest.mock('./fetchData.js');

describe('allItemsCount', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    global.document = window.document; // Restore the document object
  });

  it('should update the count-span element with the fetched data length', async () => {
    // Mock successful fetch data
    const mockData = [{ movie: 'movie-1' }, { movie: 'movie-2' }, { movie: 'movie-3' }];
    fetchData.mockResolvedValue(mockData);

    // Create a count-span element
    const countSpan = document.createElement('span');
    countSpan.id = 'count-span';
    document.body.appendChild(countSpan);

    // Call the function
    await allItemsCount();

    // Expectations
    expect(fetchData).toHaveBeenCalled();
    expect(countSpan.textContent).toBe(`(${mockData.length})`);

    // Clean up
    document.body.removeChild(countSpan);
  });
});
