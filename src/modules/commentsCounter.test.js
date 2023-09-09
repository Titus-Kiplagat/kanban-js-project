// Import the necessary dependencies
import { JSDOM } from 'jsdom';
import totalCommentsCount, { commentCount } from './commentsCounter.js';

// Create a virtual DOM for testing
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;

describe('totalCommentsCount', () => {
  it('should return the number of child elements', () => {
    document.body.innerHTML = '<div id="comments-section"><p>Comment 1</p><p>Comment 2</p></div>';

    const result = totalCommentsCount();

    expect(result).toBe(2);
  });
});

describe('commentCount', () => {
  it('should return the length of an array', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];

    const result = commentCount(commentList);

    expect(result).toBe(3);
  });
});