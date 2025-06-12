import L from 'leaflet';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import type { IMap } from '@/types/IComponents/IMap';

import styles from './Map.module.css';
import { UpdateMapCenter } from './UpdateMapCenter';

export const Map = ({ center, zoom = 13, scrollWheelZoom = true }: IMap) => {
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
                    <Circle
                        center={center}
                        radius={500}
                        pathOptions={{ fillColor: 'blue', color: 'blue', fillOpacity: 0.2 }}
                    />
                    <UpdateMapCenter center={center} />
                </MapContainer>
            </div>
            ;
        </>
    );
};
