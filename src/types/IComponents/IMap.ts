import type { LatLngExpression } from 'leaflet';

export interface IMap {
    center: LatLngExpression;
    zoom?: number;
    scrollWheelZoom?: boolean;
}
