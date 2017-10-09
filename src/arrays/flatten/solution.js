'use strict';

const reduce = require('../reduce');
const concat = require('../concat');

function flatten(arrays) {
    return reduce(arrays, (result, array) =>
        [...result, ...array], []
    );
}

module.exports = flatten;