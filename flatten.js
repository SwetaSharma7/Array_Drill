function flatten(array) {
    const result = [];

    function traverse(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                traverse(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    traverse(array);
    return result;
}

module.exports = flatten;
