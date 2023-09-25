'use strict';

const isNumber = require('../is-number');

function isCollection(value) {
    return (value.length || value.size) && (isNumber(value.length) || isNumber(value.size));
}

module.exports = isCollection;