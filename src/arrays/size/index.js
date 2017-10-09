'use strict';

const reduce = require('../reduce');

function size(array) {
    return reduce(array, result => result + 1, 0);
}

module.exports = size;