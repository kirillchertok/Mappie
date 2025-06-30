import type { IPlace } from '../IPlace';
import type { IPlaceType } from '../IPlaceType';
import type { Variant } from './IFavoriteCard';

export interface IFavoriteCardVariant {
    variant: Variant;
    data: IPlace;
    types: IPlaceType[];
}
