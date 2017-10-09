const reduce = require('./');

describe('reduce', () => {
    test('преобразует массив в значение', () => {
        expect(reduce([1, 2, 3], (total, n) => total + n)).toBe(6);
    });
});