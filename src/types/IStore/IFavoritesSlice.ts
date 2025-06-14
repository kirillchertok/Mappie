import type { IPlace } from '../IPlace';

export interface IFavoriteSlice {
    favorites: IPlace[];
    selectedFavorite: IPlace | undefined;
}
