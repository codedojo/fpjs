'use strict';

function some(list, fn) {
    for (let item of list) {
        if (fn(item)) {
            return true;
        }
    }

    return false;
}

module.exports = some;