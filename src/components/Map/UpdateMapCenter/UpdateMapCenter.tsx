import type { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface UpdateMapCenterProps {
    center: LatLngExpression;
}

export const UpdateMapCenter = ({ center }: UpdateMapCenterProps) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
};
