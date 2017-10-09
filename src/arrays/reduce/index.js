'use strict';

const isDefined = require('../../objects/is-defined');
const size = require('../size');

function reduce(array, fn, initialValue) {
    let accumulator;
    let startAt;
    let length = size(array);
    let isInitialValueDefined = isDefined(initialValue);

    if (isInitialValueDefined) {
        accumulator = initialValue;
        startAt = 0;
    } else {
        accumulator = array[0];
        startAt = 1;
    }
    
    for (let i = startAt; i < length; i++) {
        accumulator = fn(accumulator, array[i], i, array);
    }
    
    return accumulator;
}

module.exports = reduce;