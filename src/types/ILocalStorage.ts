import type { IPlace } from './IPlace';
import type { IPlaceType } from './IPlaceType';

interface ISetCache {
    lat: number;
    lon: number;
    radius: number;
    types: IPlaceType[];
    places: IPlace[];
}

interface IGetCache {
    lat: number;
    lon: number;
    radius: number;
    types: IPlaceType[];
}

interface ICacheItem {
    timestamp: number;
    data: IPlace[];
}

export type { ICacheItem, IGetCache, ISetCache };
