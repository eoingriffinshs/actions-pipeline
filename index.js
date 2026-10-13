// Greet a user by name, or throw an error if no name is given
function greet(name) {
  if (!name) {
    throw new Error('Name is required');
  }
  return `Hello, ${name}! Welcome to GitHub Actions.`;
}

// Add two numbers together
function add(a, b) {
  return a + b;
}

// Export both functions so other files can use them
module.exports = { greet, add };