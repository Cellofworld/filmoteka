import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchTvShowMain = createAsyncThunk(
    'films/fetchTvShowMain',
    async function(paginationPage) {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2022&page=${paginationPage}`, 
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