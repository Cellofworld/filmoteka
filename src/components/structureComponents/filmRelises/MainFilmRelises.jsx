import { Link } from 'react-router-dom'
import LoadingSpinnerMain from '../loadingSpinner/LoadingSpinnerMain'
import './mainFilmPop.css'

function MainFilmRelises({dataFilm}) {


    if(dataFilm === undefined) return <LoadingSpinnerMain />

    return (
        <div className="main-film-relises">
            {
                dataFilm.map((el) => {
                    return (
                        <Link className='select-film' key={el.kinopoiskId} to={`/${el.kinopoiskId}`}>                      
                            <div className="main-film-item" key={el.kinopoiskId}>
    
                                <div className="main-film-year">{el.year}</div>
                                <div className="main-film-img">
                                    <img className="film-img-item" src={el.posterUrlPreview} alt={el.nameRu} />
                                </div>
                                <div className="main-film-mask"></div>
                                <div className="main-film-discription">
                                    <div className="main-film-title">{el.nameRu}</div>
                                    <div className="main-film-rates">
                                        <div className="kp-rates">
                                            <div className="kp-title">KP</div>
                                            <div className="raiting">{el.ratingKinopoisk}</div>
                                        </div>
                                        <div className="imdb-rates">
                                            <div className='imdb-title'>IMDB</div>
                                            <div className='raiting'>{el.ratingImdb}</div>
                                        </div>
                                    </div>
                                </div>                              
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MainFilmRelises