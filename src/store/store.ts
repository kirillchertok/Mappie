import { configureStore } from '@reduxjs/toolkit';

import FavoriteReducer from './slices/favoritesSlice';
import PanelReducer from './slices/panelSlice';
import PlaceReducer from './slices/placeSlice';
import RouteReducer from './slices/routeSlice';

export const store = configureStore({
    reducer: {
        panel: PanelReducer,
        place: PlaceReducer,
        favorites: FavoriteReducer,
        route: RouteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
