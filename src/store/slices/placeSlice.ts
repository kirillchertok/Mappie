import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LatLngExpression } from 'leaflet';

import { BASE_COORDINATES } from '@/constants/baseCoordinates';
import { PLACE_TYPES } from '@/constants/placeTypes';
import type { IPlace } from '@/types/IPlace';
import type { IPlaceType } from '@/types/IPlaceType';
import type { IPlaceSlice } from '@/types/IStore/IPlaceSlice';

const initialState: IPlaceSlice = {
    userCoordinates: BASE_COORDINATES,
    centerCoordinates: BASE_COORDINATES,
    radius: 500,
    types: PLACE_TYPES,
    places: [],
    filteredPlaces: [],
};

const PlaceSlice = createSlice({
    name: 'place',
    initialState: initialState,
    reducers: {
        setCoordinates: (state, action: PayloadAction<LatLngExpression>) => {
            state.userCoordinates = action.payload;
            state.centerCoordinates = action.payload;
        },

        setUserCoordinates: (state, action: PayloadAction<LatLngExpression>) => {
            state.userCoordinates = action.payload;
        },

        setCenterCoordinates: (state, action: PayloadAction<LatLngExpression>) => {
            state.centerCoordinates = action.payload;
        },

        setRadius: (state, action: PayloadAction<number>) => {
            state.radius = action.payload;
        },

        setTypes: (state, action: PayloadAction<IPlaceType[]>) => {
            state.types = action.payload;
        },

        addType: (state, action: PayloadAction<IPlaceType>) => {
            state.types = [...state.types, action.payload];
        },

        removeType: (state, action: PayloadAction<IPlaceType>) => {
            state.types = state.types.filter(type => type.name !== action.payload.name);
        },

        setPlaces: (state, action: PayloadAction<IPlace[]>) => {
            state.places = action.payload;
            state.filteredPlaces = action.payload;
        },

        setFilteredPLaces: (state, action: PayloadAction<IPlace[]>) => {
            state.filteredPlaces = action.payload;
        },

        addPlace: (state, action: PayloadAction<IPlace>) => {
            state.places = [...state.places, action.payload];
        },

        removePlace: (state, action: PayloadAction<IPlace>) => {
            state.places = state.places.filter(place => place.id !== action.payload.id);
        },
    },
});

export const {
    setRadius,
    setPlaces,
    setTypes,
    addPlace,
    addType,
    removePlace,
    removeType,
    setCoordinates,
    setFilteredPLaces,
    setCenterCoordinates,
    setUserCoordinates,
} = PlaceSlice.actions;

export default PlaceSlice.reducer;
