import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        value: null
    },
    reducers: {
        setNews: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setNews: setNewsState } = newsSlice.actions;
export default newsSlice.reducer;
