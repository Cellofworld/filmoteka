import { createSlice } from "@reduxjs/toolkit";
import { fetchAnimeMainFilm } from "./animeSlice/fetchingAnime";
import { fetchAnimeSliderFilm } from "./animeSlice/fetchingSliderAnime";



const animeFilmSlice = createSlice({
    name: 'animeFilm',
    initialState: {
        animeFilmSlider:[],
        animeFilmMain:[],
        pagination: 1,
        status: null,
        error: null,
    },
    reducers: {
        paginationPageAnime: (state, action) => {
            state.pagination = action.payload
        },
    },
    extraReducers: {
        [fetchAnimeSliderFilm.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchAnimeSliderFilm.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.animeFilmSlider = action.payload;
        },
        [fetchAnimeSliderFilm.rejected]: (state, action) => {},
        
        [fetchAnimeMainFilm.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchAnimeMainFilm.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.animeFilmMain = action.payload;
        },
        [fetchAnimeMainFilm.rejected]: (state, action) => {},
    },
});

export const {paginationPageAnime} = animeFilmSlice.actions;

export default animeFilmSlice.reducer;