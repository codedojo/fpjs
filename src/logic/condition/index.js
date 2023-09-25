function or(fn1, fn2) {
    return function(value) {
        return fn1(value) || fn2(value);
    };
}

module.exports = or;