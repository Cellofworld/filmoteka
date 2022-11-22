import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnimeSliderFilm = createAsyncThunk(
    'films/fetchAnimeSliderFilm',
    async function() {
        const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=24&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2021&yearTo=2022&page=1', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
                'Content-Type': 'application/json',
            },
        });
        const filmsData = await response.json();

        return filmsData;
    }
)