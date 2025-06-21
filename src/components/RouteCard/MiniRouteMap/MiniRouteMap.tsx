import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';

interface MiniRouteMapProps {
    coordinates: [number, number][];
}

export const MiniRouteMap = ({ coordinates }: MiniRouteMapProps) => {
    if (coordinates.length === 0) return null;

    return (
        <MapContainer
            center={coordinates[Math.floor(coordinates.length / 2)]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={coordinates[0]}></Marker>
            <Marker position={coordinates[coordinates.length - 1]}></Marker>
            <Polyline
                positions={coordinates}
                color='blue'
            />
        </MapContainer>
    );
};
