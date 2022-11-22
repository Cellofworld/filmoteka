import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../structureComponents/paginationPage/Pagination";
import { fetchAnimeMainFilm } from "../../store/animeSlice/fetchingAnime";
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";
import MainFilmFiltres from "../structureComponents/filmFiltre/MainFilmFiltre";
import MainFilmRelises from "../structureComponents/filmRelises/MainFilmRelises";
import { paginationPageAnime } from "../../store/animeFilm";


function AnimeFilmMain() {

    const dispatch = useDispatch();

    const animeMainData = useSelector(state => state.animeFilms.animeFilmMain.items);

    const totalPages = useSelector(state => state.animeFilms.animeFilmMain.totalPages);

    const paginationPage = useSelector(state => state.animeFilms.pagination);

    const statusPage = useSelector(state => state.animeFilms.status);
  

    useEffect(() => {
        dispatch(fetchAnimeMainFilm(paginationPage));
    }, [paginationPage])

    if (statusPage !== 'resolved') return <LoadingSpinnerMain />

    return (
        <div className="pop-main">
        <div className="anime-films">
            <MainFilmRelises dataFilm={animeMainData} />
            <Pagination dataPage={totalPages} paginationNumber={paginationPage} dispatchPagination={paginationPageAnime} />
        </div>
            <MainFilmFiltres />
        </div>
    )
}

export default AnimeFilmMain