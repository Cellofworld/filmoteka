import { createSlice } from "@reduxjs/toolkit";
import { fetchFilmMain } from "./filmsSlice/fetchingFilm";
import { fetchFilmSlider } from "./filmsSlice/fetchingFilmSlider";


const filmSlice = createSlice({
    name: 'Films',
    initialState: {
        filmSlider:[],
        filmMain:[],
        pagination: 1 ,
        status: null,
        error: null,
    },
    reducers: {
        paginationPage: (state, action) => {
            state.pagination = action.payload
        },
    },
    extraReducers: {
        [fetchFilmSlider.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchFilmSlider.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.filmSlider = action.payload;
        },
        [fetchFilmSlider.rejected]: (state, action) => {},
        
        [fetchFilmMain.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchFilmMain.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.filmMain = action.payload;
        },
        [fetchFilmMain.rejected]: (state, action) => {},
    },
});

export const {paginationPage, remove} = filmSlice.actions;


export default filmSlice.reducer;


