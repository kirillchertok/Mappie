import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsLoading } from '@/store/slices/appSlice';
import { setEndName, setRoute, setStartName } from '@/store/slices/routeSlice';
import { createRoutingControl } from '@/utils/creatingRoutingControl';
import { getPlaceName } from '@/utils/getPlaceName';

export const Routing = () => {
    const map = useMap();
    const dispatch = useAppDispatch();

    const places = useAppSelector(state => state.place.places);
    const { start, end } = useAppSelector(state => state.route);

    useEffect(() => {
        if (!map || !start || !end) return;

        dispatch(setIsLoading(true));

        const routingControl = createRoutingControl({ start, end, map });

        routingControl.on('routesfound', e => {
            dispatch(setIsLoading(false));

            const coordinates = e.routes[0].coordinates.map((coord: L.LatLng) => [
                coord.lat,
                coord.lng,
            ]);
            dispatch(setRoute(coordinates));

            dispatch(setStartName(getPlaceName(start, places)));
            dispatch(setEndName(getPlaceName(end, places)));
        });

        routingControl.on('routingerror', () => {
            dispatch(setIsLoading(false));
        });

        return () => {
            if (map) {
                map.removeControl(routingControl);
            }
        };
    }, [map, end, start, dispatch, places]);

    return null;
};
