const every = require('./');

describe('every', () => {
    test('возращает `true` если все элементы проходят тест', () => {
        expect(every([2, 4, 6, 8, 10], n => n % 2 === 0)).toBe(true);
    });

    test('возращает `false` если не все элементы проходят тест', () => {
        expect(every([1, 2, 3, 4, 5], n => n % 2 === 0)).toBe(false);
    });
});