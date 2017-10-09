'use strict';

const reduce = require('../reduce');

function map(array, fn) {
    return reduce(array, (result, item, index) => {
        result[index] = fn(item, index, array);

        return result;
    }, []);
}

module.exports = map;