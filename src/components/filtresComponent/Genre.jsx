import { filtres } from "../../store/filtres"
import {searchFiltresTrg} from "../../store/searchFiltres";
import { useDispatch, useSelector } from "react-redux";

function Genre() {

    const dispatch = useDispatch();
    const genres = filtres.genres;

    const valueGen = useSelector(state => state.searchFiltres.searchFiltreItem.genre)

 

    return (
        <div className='filtres-genres'>
            <div className='genres-title filtre-title-second'>Жанр</div>
            <select className='filtres-genres-items select-items' value={valueGen} onChange={(e) => dispatch(searchFiltresTrg(e.target.value))}>
                {
                    genres.map((el) => (
                        <option key={el.id} value={el.id}>{el.genre}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Genre