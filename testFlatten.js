const flatten = require('./flatten');

// Test the flatten function
const nestedArray = [1, [2], [[3]], [[[4]]]];

const flattened = flatten(nestedArray);
console.log(`Flattened: [${flattened}]`);
