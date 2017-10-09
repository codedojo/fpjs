'use strict';

const length = require('../length');

function isEmpty(array) {
    return length(array) === 0;
}

module.exports = isEmpty;