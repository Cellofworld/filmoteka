import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTvShowMain } from "../../store/tvShowSlice/fetchingTvShow";
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";
import MainFilmFiltres from "../structureComponents/filmFiltre/MainFilmFiltre";
import MainFilmRelises from "../structureComponents/filmRelises/MainFilmRelises";
import Pagination from "../structureComponents/paginationPage/Pagination";
import {paginationPageTvShow} from "../../store/tvShow"

import { fetchFilmMain } from "../../store/filmsSlice/fetchingFilm";




function TvShowMain() {

    const dispatch = useDispatch();

    const tvShowMainData = useSelector(state => state.tvShow.tvShowFilmMain.items);

    const totalPages = useSelector(state => state.tvShow.tvShowFilmMain.totalPages);

    const paginationPage = useSelector(state => state.tvShow.pagination);

    const statusPage = useSelector(state => state.tvShow.status);


    useEffect(() => {
        dispatch(fetchTvShowMain(paginationPage))
    }, [paginationPage])

    if (statusPage !== 'resolved') return <LoadingSpinnerMain />

    return (
        <div className="pop-main">

        <div className="tvShow-film">
            <MainFilmRelises dataFilm={tvShowMainData} />
            <Pagination dataPage={totalPages} paginationNumber={paginationPage} dispatchPagination={paginationPageTvShow} />          
        </div>
            <MainFilmFiltres />
        </div>
    )
}

export default TvShowMain