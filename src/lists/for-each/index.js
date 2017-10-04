'use strict';

function forEach(list, fn) {
    for (let i = 0; i < list.length; i++) {
        fn(list[i], i, list);
    }
}

module.exports = forEach;