'use strict';

const reduce = require('../reduce');
const range = require('../range');
const length = require('../length');

function zip(left, right, fn) {
    return reduce(length(left) >= length(right) ? right : left, (result, item, index) => 
        [...result, fn(left[index], right[index])], []
    );
}

module.exports = zip;