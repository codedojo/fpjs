'use strict';

const reduce = require('../reduce');

function includes(array, item) {
    return reduce(array, (result, i) => result || item === i, false);
}

module.exports = includes;