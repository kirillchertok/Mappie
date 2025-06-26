import type { LatLngExpression } from 'leaflet';

import { RouteService } from '@/services/routeService';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFromTo, setIsActive, setRouteInfo } from '@/store/slices/routeSlice';
import type { IRoute } from '@/types/IRoute';
import { normalizeCoordinates } from '@/utils/convertLeafletExpr';

export const useRoute = () => {
    const dispatch = useAppDispatch();

    const routes = useAppSelector(state => state.routes.routes);

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

    const compareRoute = (route: IRoute) => {
        return (
            routes.filter(r => {
                return (
                    normalizeCoordinates(r.start) === normalizeCoordinates(route.start) &&
                    normalizeCoordinates(r.end) === normalizeCoordinates(route.end)
                );
            }).length === 1
        );
    };

    return { getRoute, compareRoute };
};
