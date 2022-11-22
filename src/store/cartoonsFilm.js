import { createSlice } from "@reduxjs/toolkit";
import { fetchCartoonsMain } from "./cartoonsSlice/fetchingCartoons";
import { fetchCartoonsSlider } from "./cartoonsSlice/fetchingCartoonSlider";



const cartoonsFilmSlice = createSlice({
    name: 'cartoonFilm',
    initialState: {
        cartoonFilmSlider:[],
        cartoonFilmMain:[],
        pagination: 1,
        status: null,
        error: null,
    },
    reducers: {
        paginationPageCartoons: (state, action) => {
            state.pagination = action.payload
        },
    },
    extraReducers: {
        [fetchCartoonsSlider.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCartoonsSlider.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cartoonFilmSlider = action.payload;
        },
        [fetchCartoonsSlider.rejected]: (state, action) => {},
        
        [fetchCartoonsMain.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCartoonsMain.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.cartoonFilmMain = action.payload;
        },
        [fetchCartoonsMain.rejected]: (state, action) => {},
    },
});

export const {paginationPageCartoons} = cartoonsFilmSlice.actions;

export default cartoonsFilmSlice.reducer;