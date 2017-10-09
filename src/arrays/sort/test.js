const sort = require('./');

describe('sort', () => {
    test('сортирует массив чисел в порядке возрастания', () => {
        expect(sort([1, 3, 2])).toEqual([1, 2, 3]);
    });

    test('сортирует массив строк в порядке возрастания', () => {
        expect(sort(['a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    test('сортирует массив с помощью функции', () => {
        expect(sort([{id: 1}, {id: 3}, {id: 2}], (a, b) => a.id - b.id)).toEqual([{id: 1}, {id: 2}, {id: 3}]);
    });
});