import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAppSlice } from '@/types/IStore/IAppSlice';

const initialState: IAppSlice = {
    isLoading: false,
    authError: null,
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
    },
});

export const { setIsLoading, setAuthError, removeAuthError } = AppSlice.actions;

export default AppSlice.reducer;
