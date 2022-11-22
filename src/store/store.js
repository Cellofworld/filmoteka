import { configureStore } from "@reduxjs/toolkit";
import animeFilmReducer from './animeFilm';
import cartoonFilmReducer from './cartoonsFilm';
import tvShowReducer from './tvShow';
import filmReducer from './film';
import searchFilmReducer from './serchFilm';
import searchFiltresReducer from './searchFiltres'

export default configureStore({
    reducer: {
        animeFilms: animeFilmReducer,
        cartoonFilms: cartoonFilmReducer,
        tvShow: tvShowReducer,
        films: filmReducer,
        searchFilms: searchFilmReducer,
        searchFiltres: searchFiltresReducer
    }
  })