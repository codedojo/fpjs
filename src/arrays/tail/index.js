'use strict';

const reduce = require('../reduce');
const concat = require('../concat');

function tail(array) {
    return reduce(array, (result, item, index) =>
        index !== 0 ? concat(result, [item]) : result, []
    );
}

module.exports = tail;