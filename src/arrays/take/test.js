const take = require('./');

describe('take', () => {
    test('возвращает первые n-элементов', () => {
        expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        expect(take([1, 2], 3)).toEqual([1, 2]);
        expect(take([1, 2], -1)).toEqual([]);
        expect(take([1, 2], 0)).toEqual([]);
    });
});