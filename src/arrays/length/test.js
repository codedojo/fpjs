const length = require('./');

describe('length', () => {
    test('возращает длину массива', () => {
        expect(length([1, 2, 3])).toBe(3);
        expect(length([1])).toBe(1);
        expect(length([])).toBe(0);
    });
});