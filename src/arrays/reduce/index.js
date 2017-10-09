'use strict';

function reduce(array, fn, initialValue) {
    let accumulator;

    if (initialValue !== undefined) {
        accumulator = initialValue;
    } else {
        accumulator = array[0];
    }
    
    for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }
    
    return accumulator;
}

module.exports = reduce;