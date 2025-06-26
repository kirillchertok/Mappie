import type { LatLngExpression } from 'leaflet';

export const convertLeafletExpr = (coordinates: LatLngExpression | undefined) => {
    const latLon = coordinates?.toString().split(',');
    return {
        lat: Number(latLon ? latLon[0] : 0),
        lon: Number(latLon ? latLon[1] : 0),
    };
};

export const normalizeCoordinates = (coord: LatLngExpression | undefined) => {
    const normalized = convertLeafletExpr(coord);
    return `${normalized.lat.toFixed(3)}-${normalized.lon.toFixed(3)}`;
};
