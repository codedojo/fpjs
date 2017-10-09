const concat = require('./');

describe('concat', () => {
    test('соединяет два массива', () => {
        expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('не изменяет начальные массивы', () => {
        let a = [1, 2];
        let b = [3, 4];

        concat(a, b);

        expect(a).toEqual([1, 2]);
        expect(b).toEqual([3, 4]);
    });
});