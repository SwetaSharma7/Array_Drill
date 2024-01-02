function find(elements, cb) {
    // Iterate over the elements array
    for (let i = 0; i < elements.length; i++) {
        // If the callback returns true, return the current element
        if (cb(elements[i], i)) {
            return elements[i];
        }
    }

//    returning undefined here
    return undefined;
}

module.exports = find;
