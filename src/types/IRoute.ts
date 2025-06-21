import type { LatLngExpression } from 'leaflet';

import type { IConvertRouteInfoReturn } from './IUtils/IConvertRouteInfo';

export interface IRoute {
    start: LatLngExpression | undefined;
    startName: string | undefined;
    end: LatLngExpression | undefined;
    endName: string | undefined;
    route: [number, number][] | undefined;
    distance: IConvertRouteInfoReturn | undefined;
    duration: IConvertRouteInfoReturn | undefined;
}
