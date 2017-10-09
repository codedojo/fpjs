'use strict';

const reduce = require('../reduce');
const length = require('../length');

function reverse(array) {
    return reduce(array, (result, item, index) => {
        result[(length(array) - 1) - index] = item;

        return result;
    }, []);
}

module.exports = reverse;