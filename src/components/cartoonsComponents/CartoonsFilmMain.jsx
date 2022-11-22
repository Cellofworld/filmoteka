import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartoonsMain } from "../../store/cartoonsSlice/fetchingCartoons";
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";
import MainFilmFiltres from "../structureComponents/filmFiltre/MainFilmFiltre";
import MainFilmRelises from "../structureComponents/filmRelises/MainFilmRelises";
import { paginationPageCartoons } from "../../store/cartoonsFilm";
import Pagination from "../structureComponents/paginationPage/Pagination";



function CartoonsFilmMain() {

    const dispatch = useDispatch();

    const cartoonsMainData = useSelector(state => state.cartoonFilms.cartoonFilmMain.items);

    const totalPages = useSelector(state => state.cartoonFilms.cartoonFilmMain.totalPages);

    const paginationPage = useSelector(state => state.cartoonFilms.pagination);

    const statusPage = useSelector(state => state.cartoonFilms.status);


    useEffect(() => {
        dispatch(fetchCartoonsMain(paginationPage))
    }, [paginationPage])

    if (statusPage !== 'resolved') return <LoadingSpinnerMain />

    return (
        <div className="pop-main">
        <div className="cartoons-film">
            <MainFilmRelises dataFilm={cartoonsMainData} />
            <Pagination dataPage={totalPages} paginationNumber={paginationPage} dispatchPagination={paginationPageCartoons} />
        </div>
            <MainFilmFiltres />
        </div>
    )
}

export default CartoonsFilmMain