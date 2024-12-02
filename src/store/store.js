import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import newsReducer from "./newsSlice"
import servicesReducer from "./servicesSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
        services: servicesReducer
    },
});
