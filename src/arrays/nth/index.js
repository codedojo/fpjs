function nth(n) {
    return function(list) {
        return list[n];
    };
}

// const nth = n => list => list[n];

module.exports = nth;