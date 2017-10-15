'use strict';

function once(fn) {
    let hasCalled = false;

    return (...args) => {
        if (!hasCalled) {
            hasCalled = true;
            return fn(...args);
        }
    };
}

module.exports = once;