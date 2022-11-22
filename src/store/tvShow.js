import { createSlice } from "@reduxjs/toolkit";
import { fetchTvShowMain } from "./tvShowSlice/fetchingTvShow";
import { fetchTvShowSlider } from "./tvShowSlice/fetchingTvShowSlider";


const tvShowFilmSlice = createSlice({
    name: 'tvShowFilm',
    initialState: {
        tvShowFilmSlider:[],
        tvShowFilmMain:[],
        pagination: 1,
        status: null,
        error: null,
    },
    reducers: {
        paginationPageTvShow: (state, action) => {
            state.pagination = action.payload
        },
    },
    extraReducers: {
        [fetchTvShowSlider.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTvShowSlider.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.tvShowFilmSlider = action.payload;
        },
        [fetchTvShowSlider.rejected]: (state, action) => {},
        
        [fetchTvShowMain.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTvShowMain.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.tvShowFilmMain = action.payload;
        },
        [fetchTvShowMain.rejected]: (state, action) => {},
    },
});

export const {paginationPageTvShow, remove} = tvShowFilmSlice.actions;

export default tvShowFilmSlice.reducer;