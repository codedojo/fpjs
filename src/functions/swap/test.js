const swap = require('./');

describe('swap', () => {
    test('возвращает функцию', () => {
        expect(swap(() => {})).toBeInstanceOf(Function);
    });

    test('функция принимает два аргмента', () => {
        let fn = jest.fn((value, fn) => fn(value));
        let fnSwapped = swap(fn);

        expect(fnSwapped.length).toBe(2);
    });

    test('функция принимает два аргмента в обратном порядке', () => {
        let fn = jest.fn((value, fn) => fn(value));
        let fnSwapped = swap(fn);

        fnSwapped(value => value, 42);

        expect(fn.mock.calls[0][0]).toBe(42);
        expect(fn.mock.calls[0][1]).toBeInstanceOf(Function);
    });
});