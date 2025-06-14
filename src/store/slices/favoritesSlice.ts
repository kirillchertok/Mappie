import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IPlace } from '@/types/IPlace';
import type { IFavoriteSlice } from '@/types/IStore/IFavoritesSlice';

const initialState: IFavoriteSlice = {
    favorites: [],
    selectedFavorite: null,
};

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<IPlace[]>) => {
            state.favorites = action.payload;
        },

        addFavorite: (state, action: PayloadAction<IPlace>) => {
            state.favorites = [...state.favorites, action.payload];
        },

        removeFavorite: (state, action: PayloadAction<IPlace>) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id);
        },

        selectFavorite: (state, action: PayloadAction<IPlace>) => {
            state.selectedFavorite = action.payload;
        },

        deselectFavorite: state => {
            state.selectedFavorite = null;
        },
    },
});

export const { setFavorites, addFavorite, removeFavorite, selectFavorite, deselectFavorite } =
    FavoritesSlice.actions;

export default FavoritesSlice.reducer;
