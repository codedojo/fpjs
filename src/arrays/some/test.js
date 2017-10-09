const some = require('./');

describe('some', () => {
    test('возвращает `true` если один из элементов проходит проверку', () => {
        expect(some([1, 2, 3, 4, 5], n => n % 2 === 0)).toBe(true);
    });

    test('возвращает `false` если ни один из элементов не проходит проверку', () => {
        expect(some([1, 3, 7, 9, 11], n => n % 2 === 0)).toBe(false);
    });
});