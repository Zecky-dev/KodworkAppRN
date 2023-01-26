import { configureStore } from "@reduxjs/toolkit";
import favoriteJobsReducer from "./slices/favoriteJobsSlice";
const store = configureStore({
    reducer: {
        favorites: favoriteJobsReducer,
    },
});

export default store;
