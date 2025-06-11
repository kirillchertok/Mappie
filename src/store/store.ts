import { configureStore } from '@reduxjs/toolkit';

import PanelReducer from './slices/panelSlice';

export const store = configureStore({
    reducer: {
        panel: PanelReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
