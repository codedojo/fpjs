const binary = require('./');

describe('binary', () => {
    test('возвращает функцию', () => {
        expect(binary(() => {})).toBeInstanceOf(Function);
    });

    test('возращаемая функция принимает два аргумента', () => {
        let fn = binary(() => {});

        expect(fn.length).toBe(2);
    });

    test('возращаемая функция вызывает переданную функцию с двумя агрументами', () => {
        let mock = jest.fn();
        let fn = binary(mock);

        fn(3, 4, 7);

        expect(mock.mock.calls[0][0]).toBe(3);
        expect(mock.mock.calls[0][1]).toBe(4);
        expect(mock.mock.calls[0][2]).toBeUndefined();
    });
});