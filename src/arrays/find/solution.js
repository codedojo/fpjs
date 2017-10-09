'use strict';

const reduce = require('../reduce');

function find(array, fn) {
    return reduce(array, (result, item) => result || (fn(item) ? item : null), null);
}

module.exports = find;