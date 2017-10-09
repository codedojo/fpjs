const filter = require('./');

describe('filter', () => {
    test('возвращает отфильтрованный массив', () => {
        let actual = filter([1, 2, 3, 4, 5], n => n % 2 === 0);

        expect(actual).toEqual([2, 4]);
    });
});