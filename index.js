module.exports = {
    functions: {
        once: require('./src/functions/once'),
        times: require('./src/functions/times')
    },
    lists: {
        every: require('./src/lists/every'),
        forEach: require('./src/lists/for-each'),
        some: require('./src/lists/some')
    },
    objects: {
        forEachProp: require('./src/objects/for-each-prop'),
        sortBy: require('./src/objects/sort-by')
    }
};