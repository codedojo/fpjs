const unary = require('./');

describe('unary', () => {
    test('возвращает функцию', () => {
        expect(unary(() => {})).toBeInstanceOf(Function);
    });

    test('возращаемая функция принимает один аргумент', () => {
        let fn = unary(() => {});

        expect(fn.length).toBe(1);
    });

    test('возращаемая функция вызывает переданную функцию с одним агрументом', () => {
        let mock = jest.fn();
        let fn = unary(mock);

        fn(3, 4);

        expect(mock.mock.calls[0][0]).toBe(3);
        expect(mock.mock.calls[0][1]).toBeUndefined();
    });
});