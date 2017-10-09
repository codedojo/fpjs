const drop = require('./');

describe('drop', () => {
    test('отбрасывает первые n-элементов', () => {
        expect(drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
        expect(drop([1, 2], 3)).toEqual([]);
        expect(drop([], 3)).toEqual([]);
        expect(drop([1, 2], -1)).toEqual([1, 2]);
        expect(drop([1, 2], 0)).toEqual([1, 2]);
    });
});