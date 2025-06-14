import axios from 'axios';
import type { LatLngExpression } from 'leaflet';

import { OSRM_API_URL } from '@/api/api';
import type { OSRMResponse } from '@/types/IResponses';
import type { IConvertRouteInfoReturn } from '@/types/IUtils/IConvertRouteInfo';
import { convertLat } from '@/utils/convertLat';
import { convertRouteIndo } from '@/utils/convertRouteInfo';

export class RouteService {
    public static async getRouteInof(
        start: LatLngExpression,
        end: LatLngExpression
    ): Promise<IConvertRouteInfoReturn[]> {
        const latS = convertLat(start).lat;
        const lonS = convertLat(start).lon;

        const latE = convertLat(end).lat;
        const lonE = convertLat(end).lon;

        const url = `${OSRM_API_URL}/${lonS},${latS};${lonE},${latE}`;

        const response = await axios.get<OSRMResponse>(url);

        const distance = response.data.routes[0].distance;
        const duration = response.data.routes[0].duration;

        return convertRouteIndo({ distance, duration });
    }
}
