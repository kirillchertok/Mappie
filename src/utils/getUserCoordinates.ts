import type { LatLngExpression } from 'leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';

export async function getUserCoordinates(): Promise<LatLngExpression> {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            resolve(BASE_COORDINATES);
            return;
        }

        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const roundedLat = parseFloat(latitude.toFixed(4));
            const roundedLng = parseFloat(longitude.toFixed(4));
            resolve([roundedLat, roundedLng] as LatLngExpression);
        });
    });
}
