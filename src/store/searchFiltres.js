import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchFiltres } from "./searchFiltresSlice/fetchingSearchFiltres";


const searchFiltresSlice = createSlice({
    name: 'searchFiltresFilm',
    initialState: {
        searchFiltresData:[],
        searchFiltreItem:{
            genre: '',
            type: 'ALL',
            order: '',
            year: 2022
        },
        pagination: 1 ,
        status: null,
        error: null,
    },
    reducers: {
        searchFiltresTrg: (state, action) => {
            state.searchFiltreItem.genre = action.payload
        },
        searchFiltresType: (state, action) => {
            state.searchFiltreItem.type = action.payload
        },
        searchFiltresOrder: (state, action) => {
            state.searchFiltreItem.order = action.payload
        },
        searchFiltresYear: (state, action) => {
            state.searchFiltreItem.year = action.payload
        },
    },
    extraReducers: {
        [fetchSearchFiltres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchSearchFiltres.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.searchFiltresData = action.payload;
        },
        [fetchSearchFiltres.rejected]: (state, action) => {},
        
    },
    
});

export const {searchFiltresTrg, searchFiltresType, searchFiltresOrder, searchFiltresYear} = searchFiltresSlice.actions;


export default searchFiltresSlice.reducer;