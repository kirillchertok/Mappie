import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IAppSlice } from '@/types/IStore/IAppSlice';

const initialState: IAppSlice = {
    isLoading: false,
};

const AppSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setIsLoading } = AppSlice.actions;

export default AppSlice.reducer;
