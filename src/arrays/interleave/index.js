// [1, 2, 3, 4], [5, 6, 7, 8] => [1, 5, 2, 6, 3, 7, 4, 8]
function interleave(list1, list2) {
    return list1.reduce((result, value, index) => {
        return [...result, value, list2[index]]
    }, []);
}

module.exports = interleave;