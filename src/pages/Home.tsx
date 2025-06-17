import type { LatLngExpression } from 'leaflet';
import { Navigate } from 'react-router-dom';

import { Map } from '@/components/Map/Map';
import { Panel } from '@/components/Panel/Panel';
import { RouteInfo } from '@/components/RouteInfo/RouteInfo';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { useLocation } from '@/hooks/useLocation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCoordinates } from '@/store/slices/placeSlice';

export const Home = () => {
    const dispatch = useAppDispatch();

    const { id, email } = useAppSelector(state => state.user);
    const setCenter = (coordinates: LatLngExpression) => dispatch(setCoordinates(coordinates));

    useLocation({ setCoordinates: setCenter });

    return (
        <>
            {id && email ? (
                <main>
                    <Sidebar />
                    <Panel />
                    <Map />
                    <RouteInfo />
                </main>
            ) : (
                <Navigate
                    replace
                    to='/auth'
                />
            )}
        </>
    );
};
