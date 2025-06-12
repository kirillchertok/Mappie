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
            const [lat, lng] = await getUserCoordinates();
            setCoordinates([lat, lng]);

            console.log(`Широта: ${lat}, Долгота: ${lng}`);
        };

        getLocation();
    }, []);

    return (
        <>
            <main style={{ background: 'green' }}>
                <Sidebar />
                <Panel />
                <Map center={coordinates} />
            </main>
        </>
    );
};
