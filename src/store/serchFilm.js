import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchFilm } from "./searchFilm/fetchingSearchFilm";


const searchFilmSlice = createSlice({
    name: 'searchFilm',
    initialState: {
        searchFilmMain:[],
        searchName:'',
        pagination: 1 ,
        status: null,
        error: null,
    },
    reducers: {
        searchFilmName: (state, action) => {
            state.searchName = action.payload
        },
    },
    extraReducers: {
        [fetchSearchFilm.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchSearchFilm.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.searchFilmMain = action.payload;
        },
        [fetchSearchFilm.rejected]: (state, action) => {},
        
    },
});

export const {searchFilmName} = searchFilmSlice.actions;


export default searchFilmSlice.reducer;