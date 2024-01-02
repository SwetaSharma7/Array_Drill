var find_fn = require('./find');

const items = [1, 2, 3, 4, 5, 5];

function isEven(element) {
    return element % 2 === 0;
}

// Use the find function to find the first even element
const firstEvenElement = find_fn(items, isEven);

console.log(firstEvenElement);
