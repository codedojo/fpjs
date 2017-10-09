const flatten = require('./');

describe('flatten', () => {
    test('returns a flat array out of a nested array', () => {
        expect(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});