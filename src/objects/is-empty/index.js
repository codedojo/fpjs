'use strict';

const isNull = require('../is-null');
const isUndefined = require('../is-undefined');
const isCollection = require('../is-collection');

function isEmpty(value) {
    if (isNull(value) || isUndefined(value)) return true;
    if (isCollection(value)) return (value.length || value.size) === 0;
    return Object.keys(value).length === 0;
}

module.exports = isEmpty;