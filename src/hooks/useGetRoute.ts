import type { LatLngExpression } from 'leaflet';

import { RouteService } from '@/services/routeService';
import { useAppDispatch } from '@/store/hooks';
import { setFromTo, setIsActive, setRouteInfo } from '@/store/slices/routeSlice';

export const useGetRoute = () => {
    const dispatch = useAppDispatch();

    const getRoute = async (
        userCoordinates: LatLngExpression,
        placeCoordinates: LatLngExpression
    ) => {
        dispatch(setIsActive(true));
        dispatch(setFromTo([userCoordinates, placeCoordinates]));

        const reponse = await RouteService.getRouteInof(userCoordinates, placeCoordinates);
        if (reponse) {
            dispatch(setRouteInfo(reponse));
        }
    };

    return { getRoute };
};
