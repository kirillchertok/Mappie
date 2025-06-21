import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAppSlice, Themes } from '@/types/IStore/IAppSlice';

const initialState: IAppSlice = {
    isLoading: false,
    authError: null,
    theme: 'light',
};

const AppSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setAuthError: (state, action: PayloadAction<string>) => {
            state.authError = action.payload;
        },

        removeAuthError: state => {
            state.authError = null;
        },

        setTheme: (state, action: PayloadAction<Themes>) => {
            state.theme = action.payload;
        },

        toogleTheme: state => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setIsLoading, setAuthError, removeAuthError, setTheme, toogleTheme } =
    AppSlice.actions;

export default AppSlice.reducer;
