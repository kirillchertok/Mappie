import { BASE_LOCAL_STORAGE_KEY, ITEM_EXPIRATION_TIME } from '@/constants/localStorage';
import type { ICacheItem, IGetCache, ISetCache } from '@/types/ILocalStorage';
import type { IPlace } from '@/types/IPlace';

export class LocalStorageService {
    public static setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public static getItem<T>(key: string): T | null {
        const value = localStorage.getItem(key);
        const returnedValue: T = value ? JSON.parse(value) : null;
        return returnedValue;
    }

    public static removeItem(key: string) {
        localStorage.removeItem(key);
    }

    public static clear() {
        localStorage.clear();
    }

    public static setCache({ lat, lon, radius, types, places }: ISetCache) {
        const key = `${BASE_LOCAL_STORAGE_KEY}_${lat}_${lon}_${radius}_${types
            .map(type => type.normalizedName)
            .join(',')}`;

        const value = {
            timestamp: Date.now(),
            data: places,
        };
        const data = JSON.stringify(value);

        LocalStorageService.setItem(key, data);
    }

    public static getCache({ lat, lon, radius, types }: IGetCache): IPlace[] | null {
        const key = `${BASE_LOCAL_STORAGE_KEY}_${lat}_${lon}_${radius}_${types
            .map(type => type.normalizedName)
            .join(',')}`;

        const data = localStorage.getItem(key);

        if (!data) return null;

        const parsedData: ICacheItem = JSON.parse(data);

        if (!parsedData) return null;

        if (Date.now() - parsedData.timestamp > ITEM_EXPIRATION_TIME) {
            LocalStorageService.removeItem(key);
        }

        return parsedData.data;
    }
}
