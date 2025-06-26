import { convertLeafletExpr } from '../convertLeafletExpr';

describe('convertLeafletExpr', () => {
    it('Правильно преобразует массив координат', () => {
        const result = convertLeafletExpr([52.52, 13.405]);
        expect(result).toEqual({
            lat: 52.52,
            lon: 13.405,
        });
    });

    it('Правильно обрабатывает нулевые координаты', () => {
        expect(convertLeafletExpr([0, 0])).toEqual({ lat: 0, lon: 0 });
    });

    it('Правильно обрабатывает отрицательные координаты', () => {
        expect(convertLeafletExpr([-52.52, -13.405])).toEqual({ lat: -52.52, lon: -13.405 });
    });
});
