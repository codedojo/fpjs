'use strict';

function curry(fn) {
    return function curried(...args) {
        if (args.length < fn.length) {
            return function(...next) {
                return curried(...args, ...next);
            };
        }

        return fn(...args);
    };
}

module.exports = curry;