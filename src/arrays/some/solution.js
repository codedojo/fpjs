'use strict';

const reduce = require('../reduce');

function some(array, fn) {
    return reduce(array, (result, item) => result || fn(item), false);
}

module.exports = some;