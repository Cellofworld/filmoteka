import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchSearchFilm } from "../../store/searchFilm/fetchingSearchFilm";
import { Link } from "react-router-dom";
import './searchFilm.css'
import LoadingSpinnerMain from "../structureComponents/loadingSpinner/LoadingSpinnerMain";


function SearchFilmPage() {

    const {searchName, status, searchFilmMain} = useSelector(state => state.searchFilms)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearchFilm(searchName))
    }, [searchName])

    if(status !== 'resolved') return <LoadingSpinnerMain />

    return (
        <div className="search-film-page">
            <div className="search-film-info">
                <div className="search-film-value">По вашему запросу "{searchFilmMain.keyword}" найдено {searchFilmMain.searchFilmsCountResult} результатов</div>
            </div>
            <div className="search-film-results">
                {
                    searchFilmMain.films.map((el) => (
                        <Link className="link-items-results" key={el.filmId} to={`/${el.filmId}`}>
                        <div className="search-film-results-item" key={el.filmId}>
                            <img className="search-film-results-item-img" src={el.posterUrlPreview} alt={el.nameRu} key={el.filmid} />
                            <div className="search-film-results-info">
                                <div className="search-film-results-name">
                                    <div className="search-film-results-name-ru">{el.nameRu}</div>
                                    <div className="search-film-results-name-en">{el.nameEn}</div>
                                </div>
                                <div className="search-film-results-tags">
                                    <div className="search-film-results-type">{el.type}</div>
                                    <div className="search-film-results-year">{el.year}</div>
                                    <div className="search-film-results-genres">
                                        {
                                            el.genres.map((e) => (
                                                <div className="search-film-results-genres-items" key={e.genre}>{e.genre}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="search-film-results-description">{el.description}</div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchFilmPage