import L from 'leaflet';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { useAppSelector } from '@/store/hooks';
import type { IMap } from '@/types/IComponents/IMap';

import { PlaceMarker } from '../PlaceMarker/PlaceMarker';
import styles from './Map.module.css';
import { MapButtons } from './MapButtons/MapButtons';
import { Routing } from './Routing/Routing';
import { UpdateMapCenter } from './UpdateMapCenter/UpdateMapCenter';

export const Map = ({ zoom = 16, scrollWheelZoom = true }: IMap) => {
    const { userCoordinates, centerCoordinates, radius, filteredPlaces, places } = useAppSelector(
        state => state.place
    );
    const { isActive, start, end } = useAppSelector(state => state.route);

    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    return (
        <>
            <div className={styles.container}>
                <MapContainer
                    center={centerCoordinates}
                    zoom={zoom}
                    zoomControl={false}
                    scrollWheelZoom={scrollWheelZoom}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <MapButtons />
                    <Marker
                        position={userCoordinates}
                        icon={L.icon({
                            iconUrl: '/user_location.png',
                            iconSize: [25, 25],
                        })}
                    >
                        <Popup>Вы здесь</Popup>
                    </Marker>
                    {filteredPlaces.length > 0 &&
                        filteredPlaces.map(place => (
                            <PlaceMarker
                                key={place.id}
                                data={place}
                            />
                        ))}
                    {(currentPanel === 'search' || places.length > 0) && (
                        <Circle
                            center={userCoordinates}
                            radius={radius}
                            pathOptions={{
                                fillColor: 'blue',
                                color: 'blue',
                                fillOpacity: 0.1,
                                dashArray: '40, 40',
                            }}
                        />
                    )}
                    <UpdateMapCenter center={centerCoordinates} />
                    {isActive && start && end && <Routing />}
                </MapContainer>
            </div>
            ;
        </>
    );
};
