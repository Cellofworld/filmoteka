import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmMain } from "../../store/filmsSlice/fetchingFilm";
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";
import MainFilmFiltres from "../structureComponents/filmFiltre/MainFilmFiltre";
import MainFilmRelises from "../structureComponents/filmRelises/MainFilmRelises";
import { paginationPage } from "../../store/film";
import Pagination from "../structureComponents/paginationPage/Pagination";




function FilmsMain() {

    const dispatch = useDispatch();

    const filmMainData = useSelector(state => state.films.filmMain.items);

    const totalPages = useSelector(state => state.films.filmMain.totalPages);

    const paginationPages = useSelector(state => state.films.pagination);

    const statusPage = useSelector(state => state.films.status);

    useEffect(() => {
        dispatch(fetchFilmMain(paginationPages))
    }, [paginationPages])


    if (statusPage !== 'resolved') return <LoadingSpinnerMain />

    return (
        <div className="pop-main">
        <div className="films-film">
            <MainFilmRelises dataFilm={filmMainData} />
            <Pagination dataPage={totalPages} paginationNumber={paginationPages} dispatchPagination={paginationPage} />
        </div>
        <MainFilmFiltres />
        </div>
    )
}

export default FilmsMain