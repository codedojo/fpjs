'use strict';

function binary(fn) {
    return (arg1, arg2) => fn(arg1, arg2);
}

module.exports = binary;