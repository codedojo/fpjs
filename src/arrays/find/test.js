const find = require('./');

describe('find', () => {
    test('возвращает элемент если он находится в массиве', () => {
        expect(find([1, 2, 3], n => n === 3)).toBe(3);
    });

    test('возвращает `null` если элемент не находится в массиве', () => {
        expect(find([1, 2, 3], n => n === 4)).toBeNull();
    });
});