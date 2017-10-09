const tail = require('./');

describe('tail', () => {
    test('возращает все элементы после первого', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });
});