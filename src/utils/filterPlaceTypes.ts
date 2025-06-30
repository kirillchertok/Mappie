import { PLACE_TYPES } from '@/constants/placeTypes';

export const filterPlaceTypes = (types: string[]) =>
    PLACE_TYPES.filter(type => types.includes(type.normalizedName)).slice(0, 2);
