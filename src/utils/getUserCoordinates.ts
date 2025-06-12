import type { LatLngExpression } from 'leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';

export async function getUserCoordinates(): Promise<LatLngExpression> {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            resolve(BASE_COORDINATES);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                resolve([latitude, longitude]);
            },
            () => {
                resolve(BASE_COORDINATES);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    });
}
