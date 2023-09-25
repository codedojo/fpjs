// [1, 2, 3, 4, 5, 6, 7, 8] => [[1, 2], [3, 4], [5, 6], [7, 8]]
function partition(by) {
    return function(list) {
        const result = [];

        for (let index = 0; index < list.length; index += by) {
            result.push(list.slice(index, index + by));
        }

        return result;
    };
}

console.log(partition(4)([1, 2, 3, 4, 5, 6, 7, 8]));