'use strict';

function range(start, end, step = 1) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    let length = Math.abs(Math.ceil((end - start) / step));
    let array = new Array(length);

    for (let i = 0; i <= length; i++) {
        array[i] = start;
        start += step
    }

    return array;
}

module.exports = range;