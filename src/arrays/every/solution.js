'use strict';

const reduce = require('../reduce');

function every(array, fn) {
    return reduce(array, (result, item) => result && fn(item), true);
}

module.exports = every;