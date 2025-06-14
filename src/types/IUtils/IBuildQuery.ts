import type { IPlaceType } from '../IPlaceType';

export interface IBuildQuery {
    lat: number;
    lon: number;
    radius: number;
    types: IPlaceType[];
}
