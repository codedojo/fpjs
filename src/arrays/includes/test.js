const includes = require('./');

describe('includes', () => {
    test('возвращает `true` если элемент присутствует в массиве', () => {
        expect(includes([1, 2, 3], 2)).toBe(true);
    });

    test('возвращает `false` если элемент отсутствует в массиве', () => {
        expect(includes([1, 2, 3], 4)).toBe(false);
    });
});