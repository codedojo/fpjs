'use strict';

const size = require('../size');

function last(array) {
    return array[size(array) - 1];
}

module.exports = last;