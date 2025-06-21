import type { LatLngExpression } from 'leaflet';

import type { IPlace } from '../IPlace';
import type { IPlaceType } from '../IPlaceType';

export interface IPlaceSlice {
    userCoordinates: LatLngExpression;
    centerCoordinates: LatLngExpression;
    radius: number;
    types: IPlaceType[];
    places: IPlace[];
    filteredPlaces: IPlace[];
}
