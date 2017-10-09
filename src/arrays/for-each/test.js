const forEach = require('./');

describe('forEach', () => {
    test('выполняет функцию для каждого элемента массива', () => {
        let fn = jest.fn();

        forEach([1, 2, 3], fn);

        expect(fn.mock.calls.length).toBe(3);
    });
});