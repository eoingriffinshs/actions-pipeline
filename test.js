const { describe, it } = require('node:test');
const assert = require('node:assert');
const { greet, add } = require('./index');

// Test the greet function
describe('greet', () => {
  it('should return a greeting with the name', () => {
    const result = greet('Learner');
    assert.strictEqual(result, 'Hello, Learner! Welcome to GitHub Actions.');
  });

  it('should throw an error if no name is provided', () => {
    assert.throws(() => greet(), { message: 'Name is required' });
  });
});

// Test the add function
describe('add', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(add(-1, 1), 0);
  });
});