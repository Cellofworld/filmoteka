import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Movies from "../../pages/movies/Movies";
import Tvshow from "../../pages/tvshow/TvShow";
import Cartoons from "../../pages/cartoons/cartoons";
import NotFound from "../../pages/NotFound/NotFound";
import Anime from "../../pages/anime/Anime"
import SinglePageFilm from "../structureComponents/singlePage/SinglePageFilm";
import SearchFilmPage from "../searchFilmComponent/SearchFilmPage";
import SearchFilmFiltres from "../searchFilmFiltres/SearchFilmFiltres";

function RouteMain() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Movies />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="tvshow" element={<Tvshow />} />
                    <Route path="cartoons" element={<Cartoons />} />
                    <Route path="anime" element={<Anime />} />
                    <Route path="/:id" element={<SinglePageFilm />} />
                    <Route path="/search" element={<SearchFilmPage />} />
                    <Route path="/searchFiltres" element={<SearchFilmFiltres />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}
export default RouteMain