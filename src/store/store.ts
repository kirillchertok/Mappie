import { configureStore } from '@reduxjs/toolkit';

import FavoriteReducer from './slices/favoritesSlice';
import PanelReducer from './slices/panelSlice';
import PlaceReducer from './slices/placeSlice';
import RouteReducer from './slices/routeSlice';
import UserReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        panel: PanelReducer,
        place: PlaceReducer,
        favorites: FavoriteReducer,
        route: RouteReducer,
        user: UserReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
