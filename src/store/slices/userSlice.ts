import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IUserSlice } from '@/types/IStore/IUserSlice';

const initialState: IUserSlice = {
    id: null,
    email: null,
};

const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserSlice>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },

        removeUser: state => {
            state.id = null;
            state.email = null;
        },
    },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
