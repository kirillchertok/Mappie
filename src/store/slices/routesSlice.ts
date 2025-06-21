import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IRoute } from '@/types/IRoute';
import type { IRoutesSlice } from '@/types/IStore/IRoutesSlice';

const initialState: IRoutesSlice = {
    routes: [],
};

const RoutesSlice = createSlice({
    name: 'routes',
    initialState: initialState,
    reducers: {
        setRoutes: (state, action: PayloadAction<IRoute[]>) => {
            state.routes = action.payload;
        },

        addRoute: (state, action: PayloadAction<IRoute>) => {
            state.routes = [...state.routes, action.payload];
        },

        removeRoute: (state, action: PayloadAction<IRoute>) => {
            state.routes = state.routes.filter(
                route => route.start === action.payload.start && route.end === action.payload.end
            );
        },
    },
});

export const { setRoutes, addRoute, removeRoute } = RoutesSlice.actions;

export default RoutesSlice.reducer;
