'use strict';

const length = require('../length');

function last(array) {
    return array[length(array) - 1];
}

module.exports = last;