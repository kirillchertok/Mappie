import type { LatLngExpression } from 'leaflet';

export const convertLat = (coordinates: LatLngExpression) => {
    const latLon = coordinates.toString().split(',');
    return {
        lat: Number(latLon[0]),
        lon: Number(latLon[1]),
    };
};
