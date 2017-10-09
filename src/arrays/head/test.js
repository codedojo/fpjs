const head = require('./');

describe('head', () => {
    test('возвращет первый элемент массива', () => {
        expect(head([1, 2, 3])).toBe(1);
    });
});