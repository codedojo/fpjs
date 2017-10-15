const curry = require('./');

describe('curry', () => {
    test('возвращает функцию на каждый аргумент передавамой функции', () => {
        let fn = curry((a, b) => a + b);
        let first = fn();
        let second = first();

        expect(fn()).toBeInstanceOf(Function);
        expect(first).toBeInstanceOf(Function);
        expect(second).toBeInstanceOf(Function);
    });

    test('вызов каррированной функции возвращает правильный результат', () => {
        let fn = curry((a, b) => a + b);

        expect(fn(1)(2)).toBe(3);
    });
});