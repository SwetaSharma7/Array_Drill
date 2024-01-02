const filter = require('./filter');

// Test the filter function
const numbers = [1, 2, 3, 4];

const filtered = filter(numbers, (item) => item > 2);
console.log(`Filtered: [${filtered}]`);
