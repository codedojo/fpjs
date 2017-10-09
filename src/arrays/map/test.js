const map = require('./');

describe('map', () => {
    test('проецирует массив', () => {
        expect(map([1, 2, 3], n => n * n)).toEqual([1, 4, 9]);
    });
});