const once = require('./');

describe('once', () => {
    test('возвращает функцию', () => {
        expect(once(() => {})).toBeInstanceOf(Function);
    });

    test('вызывает переданную функцию только один раз', () => {
        let add = jest.fn((a, b) => a + b);
        let addOnce = once(add);

        addOnce(1, 2);
        addOnce(1, 2);
        addOnce(1, 2);

        expect(add.mock.calls.length).toBe(1);
    });
});