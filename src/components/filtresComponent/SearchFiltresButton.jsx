import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchFiltres } from "../../store/searchFiltresSlice/fetchingSearchFiltres";

function SearchFiltres() {

    const searchParamFiltres = useSelector(state => state.searchFiltres.searchFiltreItem)

    const dispatch = useDispatch();
    

    return (
        <div className="search-filtres">
            <Link to="/searchFiltres" >
                <button 
                className="search-filtres-button"
                onClick={(e) => {dispatch(fetchSearchFiltres(searchParamFiltres))}}
                >Искать</button>
            </Link>
        </div>
    )
}

export default SearchFiltres