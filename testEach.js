var each_fn = require('./each')

const items = [1, 2, 3, 4, 5, 5];
 function cb(element, index){
    console.log(`Element at ${index} is ${element}`);
 }
 each_fn(items, cb);