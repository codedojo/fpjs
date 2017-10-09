'use strict';

const reduce = require('../reduce');
const concat = require('../concat');

function filter(array, fn) {
    return reduce(array, (result, item, index) =>
        fn(item, index, array) ? concat(result, [item]) : result, []
    );
}

module.exports = filter;