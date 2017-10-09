const last = require('./');

describe('last', () => {
    test('возвращает последний элемент массива', () => {
        expect(last([1, 2, 3])).toBe(3);
    });
});