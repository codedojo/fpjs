'use strict';

const length = require('../length');
const every = require('../every');
const includes = require('../includes');

function equals(a, b) {
    return (length(a) === length(b)) && every(a, item => includes(b, item));
}

module.exports = equals;