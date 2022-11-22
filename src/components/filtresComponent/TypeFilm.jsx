import { searchFiltresType } from "../../store/searchFiltres";
import { useDispatch, useSelector } from "react-redux";

function TypeFilm() {

    const dispatch = useDispatch();

    const typeFilm = useSelector(state => state.searchFiltres.searchFiltreItem.type)

    const typeFilms = 
        [
            {
                type: 'FILM',
                discription:'Фильм'            
            },
            {   
                type: 'TV_SHOW',
                discription: 'Тв шоу'
            },
            {
                type: 'TV_SERIES',
                discription: 'Сериалы'
            },
            {
                type: 'MINI_SERIES',
                discription: 'Мини сериалы'
            },
            {
                type: 'ALL',
                discription: 'Все'
            },
        ]

        
    
    return (
        <div className='filtres-type'>
            <div className="filtres-type-title filtre-title-second">Тип</div>
            <select className="type-items select-items" value={typeFilm} onChange={(e) => dispatch(searchFiltresType(e.target.value))}>
               {
                typeFilms.map((el) => (
                    <option key={el.type} value={el.type}>{el.discription}</option>
                ))
               }
            </select>
        </div>
    )
}

export default TypeFilm