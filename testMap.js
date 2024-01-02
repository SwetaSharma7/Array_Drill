var map_fn = require('./map');

const items = [1, 2, 3, 4, 5, 5];

function doubleElement(element) {
    return element * 2;
}

// Use the map function to create a new array with doubled values
const doubledValues = map_fn(items, doubleElement);

// Log the resulting array
console.log(doubledValues);
