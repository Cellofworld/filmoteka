import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchFilmMain = createAsyncThunk( 
    'films/fetchFilmMain',
    async function(paginationPage) {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2021&yearTo=2022&page=${paginationPage}`, {
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