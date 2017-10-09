'use strict';

function unary(fn) {
    return arg => fn(arg);
}

module.exports = unary;