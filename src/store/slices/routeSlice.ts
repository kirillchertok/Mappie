import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LatLngExpression } from 'leaflet';

import type { IRoute } from '@/types/IRoute';
import type { IRouteSlice } from '@/types/IStore/IRouteSlice';
import type { IConvertRouteInfoReturn } from '@/types/IUtils/IConvertRouteInfo';

const initialState: IRouteSlice = {
    isActive: false,
    start: undefined,
    startName: undefined,
    end: undefined,
    endName: undefined,
    route: undefined,
    distance: undefined,
    duration: undefined,
};

const RouteSlice = createSlice({
    name: 'route',
    initialState: initialState,
    reducers: {
        setRouteData: (state, action: PayloadAction<IRoute>) => {
            state.isActive = true;
            state.start = action.payload.start;
            state.startName = action.payload.startName;
            state.end = action.payload.end;
            state.endName = action.payload.endName;
            state.route = action.payload.route;
            state.distance = action.payload.distance;
            state.duration = action.payload.duration;
        },

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

        setRoute: (state, action: PayloadAction<[number, number][]>) => {
            state.route = action.payload;
        },

        setStartName: (state, action: PayloadAction<string>) => {
            state.startName = action.payload;
        },

        setEndName: (state, action: PayloadAction<string>) => {
            state.endName = action.payload;
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
            state.startName = undefined;
            state.endName = undefined;
            state.end = undefined;
            state.route = undefined;
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
    setStartName,
    setEndName,
    setRoute,
    setRouteData,
} = RouteSlice.actions;

export default RouteSlice.reducer;
