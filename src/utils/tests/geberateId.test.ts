import { generateId } from '../generateId';

describe('generateId', () => {
    const validCharsRegex = /^[A-Za-z0-9]+$/;

    it('Правильно генерирует ID заданной длины', () => {
        const length = 15;
        const id = generateId(length);
        expect(id).toHaveLength(length);
    });

    it('Содержит только допустимые символы (A-Z, a-z, 0-9)', () => {
        const id = generateId();
        expect(id).toMatch(validCharsRegex);
    });

    it('генерирует разные ID при последовательных вызовах', () => {
        const id1 = generateId();
        const id2 = generateId();
        expect(id1).not.toBe(id2);
    });
});
