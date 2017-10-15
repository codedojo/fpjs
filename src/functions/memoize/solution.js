'use strict';

function memoize(fn) {
    let store = {};
    
    return (...arg) => {
        if (store[arg]) {
            return store[arg];
        } else {
            store[arg] = fn(...arg);

            return store[arg];
        }
    };
}

module.exports = memoize;