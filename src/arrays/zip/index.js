'use strict';

const reduce = require('../reduce');
const range = require('../range');
const size = require('../size');

function zip(left, right, fn) {
    return reduce(size(left) >= size(right) ? right : left, (result, item, index) => 
        [...result, fn(left[index], right[index])], []
    );
}

module.exports = zip;