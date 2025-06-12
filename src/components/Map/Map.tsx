import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import type { IMap } from '@/types/IComponents/IMap';

import styles from './Map.module.css';

export const Map = ({ center, zoom = 13, scrollWheelZoom = false }: IMap) => {
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
                    <Marker position={center}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            ;
        </>
    );
};
