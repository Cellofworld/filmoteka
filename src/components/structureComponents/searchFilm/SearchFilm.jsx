import { useState } from "react"
import { Link } from "react-router-dom"
import { searchFilmName } from "../../../store/serchFilm"
import { useDispatch } from "react-redux"
import { useRef } from "react"



function SearchFilm() {

    const inputEl = useRef(null);
    const [value, setValue] = useState('')

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            inputEl.current.focus();
        }
      };

   const dispatch = useDispatch();
    
    
    return (
        <div className="search-film">
            <input
            className="input-search-film"
            type='text'
            placeholder="Введите название фильма"
            value={value}
            onKeyDown={handleKeyDown}
            onChange={(e) => setValue(e.target.value)}
            ></input>
            <Link to="/search">
            <button
            className="search-button"
            ref={inputEl}
            onClick={(e) => {dispatch(searchFilmName(value))}}
            >Искать</button>
            </Link>
        </div>
    )
}

export default SearchFilm