import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AppReducer from './slices/appSlice';
import FavoriteReducer from './slices/favoritesSlice';
import PanelReducer from './slices/panelSlice';
import PlaceReducer from './slices/placeSlice';
import RouteReducer from './slices/routeSlice';
import UserReducer from './slices/userSlice';

const rootReducer = combineReducers({
    panel: PanelReducer,
    place: PlaceReducer,
    favorites: FavoriteReducer,
    route: RouteReducer,
    user: UserReducer,
    app: AppReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['panel', 'app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
