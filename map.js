function map(elements, cb) {
    // Create an array to store the mapped values
    let result = [];

    // Iterate over the elements array
    for (let i = 0; i < elements.length; i++) {

        // Add the result of the callback to the result array
        result.push(cb(elements[i], i));
    }

    // Return the resulting array
    return result;
}

module.exports = map;
