'use strict';

const size = require('../size');

function isEmpty(array) {
    return size(array) === 0;
}

module.exports = isEmpty;