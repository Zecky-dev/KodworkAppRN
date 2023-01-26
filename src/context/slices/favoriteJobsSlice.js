import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {list:[]},
    reducers: {
        addFavorite : (state,action) => {
            state.list = state.list.concat(action.payload);
        },
        removeFavorite : (state,action) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
    },
});

export default favoriteSlice.reducer;
export const {addFavorite,removeFavorite} = favoriteSlice.actions; 