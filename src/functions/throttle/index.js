'use strict';

function throttle(fn, ms) {
    let timeout;

    return function(...args) {
        if (!timeout) {
            fn(...args);

            timeout = setTimeout(() => {
                clearTimeout(timeout);
                timeout = null;
            }, ms);
        }
    };
}

module.exports = throttle;