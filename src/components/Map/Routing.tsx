import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';

export const Routing = () => {
    const map = useMap();
    const dispatch = useAppDispatch();

    const { start, end } = useAppSelector(state => state.route);

    useEffect(() => {
        if (!map || !start || !end) return;

        dispatch(setIsLoading(true));

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(start), L.latLng(end)],
            routeWhileDragging: true,
            addWaypoints: false,
            waypointMode: 'connect',
            lineOptions: {
                styles: [{ color: 'blue', weight: 5 }],
                extendToWaypoints: true,
                missingRouteTolerance: 0.1,
                addWaypoints: false,
            },
            show: false,
            //@ts-expect-error Works, but TS said that there is no such function createMarker ))
            createMarker: () => null,
        }).addTo(map);

        routingControl.on('routesfound', () => {
            dispatch(setIsLoading(false));
        });

        routingControl.on('routingerror', () => {
            dispatch(setIsLoading(false));
        });

        return () => {
            if (map) {
                map.removeControl(routingControl);
            }
        };
    }, [map, end, start, dispatch]);

    return null;
};
