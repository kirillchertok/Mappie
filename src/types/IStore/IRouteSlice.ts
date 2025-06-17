import type { LatLngExpression } from 'leaflet';

import type { IConvertRouteInfoReturn } from '../IUtils/IConvertRouteInfo';

export interface IRouteSlice {
    isActive: boolean;
    start: LatLngExpression | undefined;
    end: LatLngExpression | undefined;
    distance: IConvertRouteInfoReturn | undefined;
    duration: IConvertRouteInfoReturn | undefined;
}
