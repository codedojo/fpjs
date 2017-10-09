'use strict';

function is(fn) {
    return arg => fn(arg);
}

module.exports = is;