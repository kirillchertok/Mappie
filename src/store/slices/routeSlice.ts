import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LatLngExpression } from 'leaflet';

import type { IRouteSlice } from '@/types/IStore/IRouteSlice';
import type { IConvertRouteInfoReturn } from '@/types/IUtils/IConvertRouteInfo';

const initialState: IRouteSlice = {
    isActive: false,
    start: undefined,
    end: undefined,
    distance: undefined,
    duration: undefined,
};

const RouteSlice = createSlice({
    name: 'route',
    initialState: initialState,
    reducers: {
        setIsActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
        },

        setStart: (state, action: PayloadAction<LatLngExpression>) => {
            state.start = action.payload;
        },

        setEnd: (state, action: PayloadAction<LatLngExpression>) => {
            state.end = action.payload;
        },

        setFromTo: (state, action: PayloadAction<[LatLngExpression, LatLngExpression]>) => {
            state.start = action.payload[0];
            state.end = action.payload[1];
        },

        setDistance: (state, action: PayloadAction<IConvertRouteInfoReturn>) => {
            state.distance = action.payload;
        },

        setDuration: (state, action: PayloadAction<IConvertRouteInfoReturn>) => {
            state.duration = action.payload;
        },

        setRouteInfo: (state, action: PayloadAction<IConvertRouteInfoReturn[]>) => {
            state.distance = action.payload[0];
            state.duration = action.payload[1];
        },

        closeRoute: state => {
            state.isActive = false;
            state.start = undefined;
            state.end = undefined;
            state.duration = undefined;
            state.duration = undefined;
        },
    },
});

export const {
    setIsActive,
    setEnd,
    setStart,
    setFromTo,
    setDistance,
    setDuration,
    setRouteInfo,
    closeRoute,
} = RouteSlice.actions;

export default RouteSlice.reducer;
