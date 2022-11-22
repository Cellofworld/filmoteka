import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchSearchFilm = createAsyncThunk(
    'films/fetchSearchFilm',
    async function(searchValue) {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchValue}&page=1`, 
        {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
                'Content-Type': 'application/json',
            },
        });
        const filmsData = await response.json();

        return filmsData;
    }
);