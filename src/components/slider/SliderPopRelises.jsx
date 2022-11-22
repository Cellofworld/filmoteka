import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"
import Slider from "react-slick";
import LoadingSpinnerSlider from "../structureComponents/loadingSpinner/LoadingSpinnerSlider";




export default function CarouselSlider({dataFilm}) {


    const settings = {
      className: "slider variable-width",
      infinite: true,
      lazyLoad: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    }

    if (dataFilm === undefined) return (
        <LoadingSpinnerSlider />
    )
    else return (
       
        <div className="slider-block">
            <Slider {...settings}>

            {dataFilm.map((el ,i) => {
                return (
                    <Link className='select-film' key={el.kinopoiskId} to={`/${el.kinopoiskId}`}>                      
                    <div className="main-film-item" key={el.kinopoiskId} style={{ width: 180 }}>

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
            })}
            </Slider>
        
        </div>
    )
}