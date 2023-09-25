'use strict';

function sequence(...fns) {
    return function(value) {
        fns.forEach(fn => fn(value));
    };
}

module.exports = sequence;