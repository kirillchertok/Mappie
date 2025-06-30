import 'leaflet-routing-machine';

import L, { type LatLngExpression, Map } from 'leaflet';

interface CreateRoutingControlOptions {
    start: LatLngExpression;
    end: LatLngExpression;
    map: Map;
    lineColor?: string;
    lineWeight?: number;
}

export const createRoutingControl = ({
    start,
    end,
    map,
    lineColor = 'blue',
    lineWeight = 5,
}: CreateRoutingControlOptions): L.Routing.Control => {
    return L.Routing.control({
        waypoints: [L.latLng(start), L.latLng(end)],
        routeWhileDragging: true,
        addWaypoints: false,
        waypointMode: 'connect',
        lineOptions: {
            styles: [{ color: lineColor, weight: lineWeight }],
            extendToWaypoints: true,
            missingRouteTolerance: 0.1,
            addWaypoints: false,
        },
        show: false,
        // @ts-expect-error strange error
        createMarker: () => null,
    }).addTo(map);
};
