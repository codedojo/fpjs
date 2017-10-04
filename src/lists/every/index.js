'use strict';

function every(list, fn) {
    for (let item of list) {
        if (!fn(item)) {
            return false;
        }
    }

    return true;
}

module.exports = every;