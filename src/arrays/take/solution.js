'use strict';

const reduce = require('../reduce');
const concat = require('../concat');

function take(array, end) {
    return reduce(array, (result, item, index) => 
        index < end ? concat(result, [item]) : result, []
    );
}

module.exports = take;