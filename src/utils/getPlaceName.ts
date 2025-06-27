import type { LatLngExpression } from 'leaflet';

import type { IPlace } from '@/types/IPlace';

import { convertLeafletExpr } from './convertLeafletExpr';

export const getPlaceName = (coordinates: LatLngExpression, places: IPlace[]) => {
    const coord = convertLeafletExpr(coordinates);
    const name = places.find(place => place.lat === coord.lat && place.lon === coord.lon)?.name;

    return name ?? coordinates.toString();
};
