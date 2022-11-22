import { useSelector } from "react-redux";
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";
import MainFilmFiltres from "../structureComponents/filmFiltre/MainFilmFiltre";
import MainFilmRelises from "../structureComponents/filmRelises/MainFilmRelises";
import "./searchFilmFiltre.css"


function SearchFilmFiltres() {

    const { searchFiltresData, status} = useSelector(state => state.searchFiltres);

    const filtresData = searchFiltresData.items;


    if(status !== 'resolved') return <LoadingSpinnerMain />
    
    return (
        <div className="search-film-filtres-results">
            <div className="earch-film-filtres-title">Список фильмов</div>
            <div className="search-film-filtres-cont">
                <MainFilmRelises dataFilm={filtresData} />
                <MainFilmFiltres />
            </div>
    </div>
    )
}

export default SearchFilmFiltres