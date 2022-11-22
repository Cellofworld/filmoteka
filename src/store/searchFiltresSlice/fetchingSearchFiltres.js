import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchSearchFiltres = createAsyncThunk(
    'films/fetchSearchFiltres',
    async function({genre, order, type, year}) {
        console.log(year)
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=${order}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=${year}&page=1`, 
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