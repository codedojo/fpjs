'use strict';

function swap(fn) {
    return function(arg1, arg2) {
        return fn(arg2, arg1);
    };
}

module.exports = swap;