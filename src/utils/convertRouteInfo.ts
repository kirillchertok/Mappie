import {
    DISTANCE_UNITS_OF_MEASUREMENTS,
    DURATION_UNITS_OF_MEASUREMENTS,
} from '@/constants/unitsOfMeasurement';
import type { IConvertRouteInfo, IConvertRouteInfoReturn } from '@/types/IUtils/IConvertRouteInfo';

export const convertRouteInfo = ({
    distance,
    duration,
}: IConvertRouteInfo): IConvertRouteInfoReturn[] => {
    let distanceUOM = 0;
    let durationUOM = 0;

    if (distance >= 1000) {
        distance /= 1000;
        distanceUOM++;
    }

    if (duration >= 60) {
        duration /= 60;
        durationUOM++;
    }

    if (duration >= 60) {
        duration /= 60;
        durationUOM++;
    }

    return [
        {
            value: Number(distance.toFixed(2)),
            unitOfMeasurement: DISTANCE_UNITS_OF_MEASUREMENTS[distanceUOM],
        },
        {
            value: Number(duration.toFixed(2)),
            unitOfMeasurement: DURATION_UNITS_OF_MEASUREMENTS[durationUOM],
        },
    ];
};
