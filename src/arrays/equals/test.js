const equals = require('./');

describe('equals', () => {
    test('возвращает `true` если массивы содеражат одниковые элементы', () => {
        expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    test('возвращает `false` если массивы не содеражат одниковые элементы', () => {
        expect(equals([1, 2, 3], [2, 3, 4])).toBe(false);
        expect(equals([1, 2], [1, 2, 3])).toBe(false);
    });
});