import type { LatLngExpression } from 'leaflet';

export interface IUseLocation {
    setCoordinates: (coordinates: LatLngExpression) => void;
}
