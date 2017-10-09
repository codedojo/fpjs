'use strict';

const reduce = require('../reduce');
const size = require('../size');

function reverse(array) {
    return reduce(array, (result, item, index) => {
        result[(size(array) - 1) - index] = item;

        return result;
    }, []);
}

module.exports = reverse;