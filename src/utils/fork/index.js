'use strict';

function fork(join, fn1, fn2) {
    return function(value) {
        return join(fn1(value), fn2(value));
    };
}

module.exports = fork;