const memoize = require('./');

describe('memoize', () => {
    test('возвращает функцию', () => {
        expect(memoize(() => {})).toBeInstanceOf(Function);
    });

    test('возвращаемая функция возвращает привальный результат', () => {
        let fn = memoize((a, b) => a + b);

        expect(fn(1, 2)).toBe(3);
    });
});