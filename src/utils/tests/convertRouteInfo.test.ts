import { convertRouteInfo } from '../convertRouteInfo';

describe('convertRouteInfo', () => {
    it('Правильно конвертирует небольшие значения', () => {
        const result = convertRouteInfo({ distance: 500, duration: 45 });
        expect(result).toEqual([
            { value: 500, unitOfMeasurement: 'м' },
            { value: 45, unitOfMeasurement: 'сек' },
        ]);
    });

    it('Правильно конвертирует расстояние в километры', () => {
        const result = convertRouteInfo({ distance: 1500, duration: 30 });
        expect(result).toEqual([
            { value: 1.5, unitOfMeasurement: 'км' },
            { value: 30, unitOfMeasurement: 'сек' },
        ]);
    });

    it('Правильно конвертирует время в минуты', () => {
        const result = convertRouteInfo({ distance: 800, duration: 125 });
        expect(result).toEqual([
            { value: 800, unitOfMeasurement: 'м' },
            { value: 2.08, unitOfMeasurement: 'мин' },
        ]);
    });

    it('обрабатывает граничные значения для расстояния', () => {
        expect(convertRouteInfo({ distance: 999, duration: 0 })[0].unitOfMeasurement).toBe('м');
        expect(convertRouteInfo({ distance: 1000, duration: 0 })[0].unitOfMeasurement).toBe('км');
        expect(convertRouteInfo({ distance: 1001, duration: 0 })[0].unitOfMeasurement).toBe('км');
    });

    it('обрабатывает граничные значения для времени', () => {
        expect(convertRouteInfo({ distance: 0, duration: 59 })[1].unitOfMeasurement).toBe('сек');
        expect(convertRouteInfo({ distance: 0, duration: 60 })[1].unitOfMeasurement).toBe('мин');
        expect(convertRouteInfo({ distance: 0, duration: 61 })[1].unitOfMeasurement).toBe('мин');
        expect(convertRouteInfo({ distance: 0, duration: 3599 })[1].unitOfMeasurement).toBe('мин');
        expect(convertRouteInfo({ distance: 0, duration: 3600 })[1].unitOfMeasurement).toBe('ч');
        expect(convertRouteInfo({ distance: 0, duration: 3601 })[1].unitOfMeasurement).toBe('ч');
    });
});
