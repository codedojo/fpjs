'use strict';

function sort(list, compare) {
    return [...list].sort(compare);
}

module.exports = sort;