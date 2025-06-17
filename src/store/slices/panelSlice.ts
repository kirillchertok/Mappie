import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IPanelState, PanelType } from '@/types/IStore/IPanelSlice';

const initialState: IPanelState = {
    isOpen: false,
    currentPanel: '',
};

const PanelSlice = createSlice({
    name: 'panel',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },

        setCurrentPanel: (state, action: PayloadAction<PanelType>) => {
            state.currentPanel = action.payload;
        },
    },
});

export const { setIsOpen, setCurrentPanel } = PanelSlice.actions;

export default PanelSlice.reducer;
