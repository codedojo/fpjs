'use stict';

function tap(fn) {
    return function(value) {
        fn(value);

        return value;
    };
}

module.exports = tap;