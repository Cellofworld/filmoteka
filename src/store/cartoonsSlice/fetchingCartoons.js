import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCartoonsMain = createAsyncThunk(
    'films/fetchCartoonsMain',
    async function(paginationPage) {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=18&order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1980&yearTo=2022&page=${paginationPage}`, {
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