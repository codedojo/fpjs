'use strict';

const reduce = require('../reduce');

function filter(array, fn) {
    return reduce(array, (result, item, index) =>
        fn(item, index, array) ? [...result, item] : result, []
    );
}

module.exports = filter;