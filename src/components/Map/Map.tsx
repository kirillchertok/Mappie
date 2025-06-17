import L from 'leaflet';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { useAppSelector } from '@/store/hooks';
import type { IMap } from '@/types/IComponents/IMap';

import { PlaceMarker } from '../PlaceMarker/PlaceMarker';
import styles from './Map.module.css';
import { Routing } from './Routing';
import { UpdateMapCenter } from './UpdateMapCenter';

export const Map = ({ zoom = 16, scrollWheelZoom = true }: IMap) => {
    const center = useAppSelector(state => state.place.coordinates);
    const radius = useAppSelector(state => state.place.radius);
    const filteredPlaces = useAppSelector(state => state.place.filteredPlaces);
    const places = useAppSelector(state => state.place.places);

    const currentPanel = useAppSelector(state => state.panel.currentPanel);

    const isActive = useAppSelector(state => state.route.isActive);
    const start = useAppSelector(state => state.route.start);
    const end = useAppSelector(state => state.route.end);

    return (
        <>
            <div className={styles.container}>
                <MapContainer
                    center={center}
                    zoom={zoom}
                    scrollWheelZoom={scrollWheelZoom}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker
                        position={center}
                        icon={L.icon({
                            iconUrl: '/src/assets/images/user_location.png',
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
                            center={center}
                            radius={radius}
                            pathOptions={{
                                fillColor: 'blue',
                                color: 'blue',
                                fillOpacity: 0.1,
                                dashArray: '40, 40',
                            }}
                        />
                    )}
                    <UpdateMapCenter center={center} />
                    {isActive && start && end && <Routing />}
                </MapContainer>
            </div>
            ;
        </>
    );
};
