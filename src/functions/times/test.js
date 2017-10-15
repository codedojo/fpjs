const times = require('./solution');

describe('times', () => {
    test('возвращает функцию', () => {
        expect(times(() => {})).toBeInstanceOf(Function);
    });

    test('передаваемая функция вызывается n раз', () => {
        let fn = jest.fn();

        times(10, fn)();

        expect(fn.mock.calls.length).toBe(10);
    });
});