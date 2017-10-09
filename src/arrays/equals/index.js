'use strict';

const size = require('../size');
const every = require('../every');
const includes = require('../includes');

function equals(a, b) {
    return (size(a) === size(b)) && every(a, item => includes(b, item));
}

module.exports = equals;