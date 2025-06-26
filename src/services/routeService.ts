import axios from 'axios';
import type { LatLngExpression } from 'leaflet';

import { OSRM_API_URL } from '@/api/api';
import type { OSRMResponse } from '@/types/IResponses';
import type { IConvertRouteInfoReturn } from '@/types/IUtils/IConvertRouteInfo';
import { convertLeafletExpr } from '@/utils/convertLeafletExpr';
import { convertRouteInfo } from '@/utils/convertRouteInfo';

export class RouteService {
    public static async getRouteInof(
        start: LatLngExpression,
        end: LatLngExpression
    ): Promise<IConvertRouteInfoReturn[]> {
        try {
            const latS = convertLeafletExpr(start).lat;
            const lonS = convertLeafletExpr(start).lon;

            const latE = convertLeafletExpr(end).lat;
            const lonE = convertLeafletExpr(end).lon;

            const url = `${OSRM_API_URL}/${lonS},${latS};${lonE},${latE}`;

            const response = await axios.get<OSRMResponse>(url);

            const distance = response.data.routes[0].distance;
            const duration = response.data.routes[0].duration;

            return convertRouteInfo({ distance, duration });
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
