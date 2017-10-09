'use strict';

const reduce = require('../reduce');

function length(array) {
    return reduce(array, result => result + 1, 0);
}

module.exports = length;