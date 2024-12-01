import { createSlice } from '@reduxjs/toolkit';
import {saveToken, dropToken, getToken} from "../services/token"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        token: getToken()
    },
    reducers: {
        setUser: (state, action) => {
            saveToken(action.payload.token)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            dropToken()
            localStorage.removeItem("user")
            console.log("drop user")
            state.user = null;
            state.token = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.value
export default userSlice.reducer;
