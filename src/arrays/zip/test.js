const zip = require('./');

describe('zip', () => {
    test('сшивает два массива', () => {
        expect(zip([1, 2, 3], [-1, -2, -3], (a, b) => a + b)).toEqual([0, 0, 0]);
    });
});