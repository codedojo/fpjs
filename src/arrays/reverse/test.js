const reverse = require('./');

describe('reverse', () => {
    test('возвращает элементы массива в обратном порядке', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
});