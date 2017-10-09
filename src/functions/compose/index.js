'use strict';

function compose(...fns) {
    return reduce((fn1, fn2) => (...args) => fn1(fn2(args)));
}

module.exports = compose;