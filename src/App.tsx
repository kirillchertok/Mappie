import '@/assets/fonts/Mont/stylesheet.css';
import '@/assets/stylesheets/global.css';

import type { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

import { Map } from '@/components/Map/Map';
import { Panel } from '@/components/Panel/Panel';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { BASE_COORDINATES } from '@/constants/baseCoordinates';
import { getUserCoordinates } from '@/utils/getUserCoordinates';

export const App = () => {
    const [coordinates, setCoordinates] = useState<LatLngExpression>(BASE_COORDINATES);

    useEffect(() => {
        const getLocation = async () => {
            const coordinates = await getUserCoordinates();
            setCoordinates(coordinates);
        };

        getLocation();
    }, []);

    return (
        <>
            <main>
                <Sidebar />
                <Panel />
                <Map center={coordinates} />
            </main>
        </>
    );
};
