'use strict';

function keys(object) {
    let keys = [];

    for (let key in object) {
        if (hasKey(object, key)) {
            keys.push(key);
        }
    }

    return keys;
}

module.exports = keys;