import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayerFilm from "../videoPlayer/VideoPlayer";
import './singlePage.css';





function SinglePageFilm() {

 

    const {id} = useParams();

    const [filmData, setFilmData] = useState([])

    const loadData = async () => {

        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
                'Content-Type': 'application/json',
            },
        });
        const filmsData = await response.json();

        setFilmData(filmsData)
    }

    useEffect(() => {

        loadData()
        
        
    },[id])


if (filmData === undefined) return <div>Loading</div>

    return (
        <div className="single-page-film">
            
                
                    <div className="single-page-item">
                        <div className="single-page-img">
                            <img className="single-img" src={filmData.posterUrlPreview} key={filmData.kinopoiskId}  />
                        </div>
                        <div className="single-page-info">
                            <table className="single-page-info-table">
                                    <tbody>
                                        <tr className="film-title-description">
                                            <td className="film-title">{filmData.nameRu}</td>
                                        </tr>
                                        <tr className="single-page-raiting">
                                            <td className="raiting-kp-title sub-table">Рейтинг Кинопоиска</td>
                                            <td className="raiting-kp disc-table">{filmData.ratingKinopoisk}</td>
                                        </tr>
                                        <tr className="single-page-raing-imdb">
                                            <td className="raiting-imdb-title sub-table">Рейтинг Imdb</td>
                                            <td className="raiting-imdb disc-table">{filmData.ratingImdb}</td>
                                        </tr>
                                        <tr className="single-page-title-ru">
                                            <td className="name-ru sub-table">Название</td>
                                            <td className="name-ru disc-table">{filmData.nameRu}</td>
                                        </tr>
                                        <tr className="single-page-title-original">
                                            <td className="name-original sub-table">Оригинальное название</td>
                                            <td className="name-original disc-table">{filmData.nameOriginal}</td>
                                        </tr>
                                        <tr className="single-page-type">
                                            <td className="type-title sub-table">Тип</td>
                                            <td className="type disc-table">{filmData.type}</td>
                                        </tr>
                                        <tr className="single-page-age-limits">
                                            <td className="age-limits-title sub-table">Возрастные ограничения</td>
                                            <td className="age-limits disc-table">{filmData.ratingAgeLimits}+</td>
                                        </tr>
                                        <tr className="single-page-serial">
                                            <td className="serial-title sub-table">Многосерийный</td>
                                            {filmData.serial ? <td className="serial disc-table">Да</td> : <td className="serial disc-table">Нет</td>}
                                        </tr>
                                        <tr className="single-page-status">
                                            <td className="status-title sub-table">Статус</td>
                                            {filmData.completed ? <td className="status disc-table">Выходит</td > : <td className="status disc-table">Вышел</td>}
                                        </tr>
                                        <tr className="single-page-countries-list">
                                            <td className="country-title sub-table">Страны</td>
                                            <td className="countries-items">
                                            { filmData.countries === undefined ? <div>Loading</div> : 
                                                            filmData.countries.map((e,i) => (
                                                                <div className="single-page-countries-item" key={i}>{e.country}</div>
                                                            ))
                                                        }
                                            </td>
                                        </tr>
                                        <tr className="single-page-genres-list">
                                            <td className="genres-title sub-table">Жанры</td>
                                            <td className="genres-items">
                                            { 
                                                            filmData.genres === undefined ? <div>Loading</div> : 
                                                            filmData.genres.map((e,i) => (
                                                                <div className="single-page-genres-item" key={i}>{e.genre}</div>
                                                            ))
                                                        }
                                            </td>
                                        </tr>
                                        <tr className="single-page-film-length">
                                            <td className="film-length-title sub-table">Продолжительность</td>
                                            <td className="film-length disc-table">{filmData.filmLength} минут</td>
                                        </tr>
                                        <tr>
                                            <td className="single-page-href">Страница на Кинопоиске</td>
                                            <td className="disc-table"><a href={filmData.webUrl}>{filmData.nameRu}</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                        <div className="single-page-discription">
                            <div className="single-page-discription-item">
                                {filmData.description}
                            </div>
                        </div>
                
            <VideoPlayerFilm />
            
        </div>
    )
}

export default SinglePageFilm