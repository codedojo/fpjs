const isEmpty = require('./');

describe('isEmpty', () => {
    test('возвращает `true` если массив пустой', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('возвращает `false` если массив не пустой', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });
});