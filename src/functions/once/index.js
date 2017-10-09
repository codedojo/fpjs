'use strict';

function once(fn) {
    let hasCalled = false;

    return (...args) => {
        if (!hasCalled) {
            fn(...args);
            hasCalled = true;
        }
    };
}

module.exports = once;