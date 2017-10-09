'use strict';

function throwError(arg1, arg2) {
    throw typeof arg1 === 'function' ? new arg1(arg2) : new Error(arg1);
}

module.exports = throwError;