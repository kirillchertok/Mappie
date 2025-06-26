import { convertLat } from '../convertLeafletExpr';

describe('convertLat', () => {
    it('Правильно преобразует массив координат', () => {
        const result = convertLat([52.52, 13.405]);
        expect(result).toEqual({
            lat: 52.52,
            lon: 13.405,
        });
    });

    it('Правильно обрабатывает нулевые координаты', () => {
        expect(convertLat([0, 0])).toEqual({ lat: 0, lon: 0 });
    });

    it('Правильно обрабатывает отрицательные координаты', () => {
        expect(convertLat([-52.52, -13.405])).toEqual({ lat: -52.52, lon: -13.405 });
    });
});
