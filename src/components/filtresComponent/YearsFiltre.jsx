import { useDispatch, useSelector } from "react-redux";
import { searchFiltresYear } from "../../store/searchFiltres";

function YearsFiltre() {

    const yearValue = useSelector(state => state.searchFiltres.searchFiltreItem.year)

    const dispatch = useDispatch();
  
    return (
        <div className='filtres-years'>
            <div className="filtres-year-title">
                <div className="years-title filtre-title-second">Год:</div>
                <div className="input-title">{yearValue}</div>
            </div>
            <input 
            className="input-filtres-years"
            type='range'
            onChange={(e) => dispatch(searchFiltresYear(e.target.value))}
            min={1950}
            max={2022}
            step={1}
            ></input>
            
        </div>
    )
}

export default YearsFiltre