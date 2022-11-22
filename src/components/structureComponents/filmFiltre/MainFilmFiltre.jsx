import './mainfilmfiltres.css'
import Genre from '../../filtresComponent/Genre'
import TypeFilm from '../../filtresComponent/TypeFilm'
import YearsFiltre from '../../filtresComponent/YearsFiltre'
import OrderFiltres from '../../filtresComponent/Order'
import SearchFiltres from '../../filtresComponent/SearchFiltresButton'


function MainFilmFiltres() {

   

    return (
        <div className="main-film-filtres">
            <div className='filtres-title'>Поиск по фильтрам:</div>
            <div className='filtres-item'>
                <YearsFiltre />
                <Genre />
                <TypeFilm />
                <OrderFiltres />
                <SearchFiltres />

            </div>
        </div>
    )
}

export default MainFilmFiltres