import { createSlice } from '@reduxjs/toolkit';
import {saveToken, getToken} from "../services/token"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem("user"),
        token: getToken()
    },
    reducers: {
        setUser: (state, action) => {
            saveToken(action.payload.token)
            localStorage.setItem("user", action.payload.user)
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.value
export default userSlice.reducer;
