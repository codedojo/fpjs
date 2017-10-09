const size = require('./');

describe('length', () => {
    test('возращает длину массива', () => {
        expect(size([1, 2, 3])).toBe(3);
        expect(size([1])).toBe(1);
        expect(size([])).toBe(0);
    });
});