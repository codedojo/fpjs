'use strict';

const reduce = require('../reduce');
const concat = require('../concat');

function drop(array, start = 0) {
    return reduce(array, (result, item, index) => 
        index >= start ? [...result, item] : result, []
    );
}

module.exports = drop;