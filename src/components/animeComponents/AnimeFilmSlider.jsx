import CarouselSlider from "../slider/SliderPopRelises";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchAnimeSliderFilm } from "../../store/animeFilm";
import { fetchAnimeSliderFilm } from "../../store/animeSlice/fetchingSliderAnime";




function AnimeFilmSlider() {

    const dispatch = useDispatch();

    const animeSliderDataFilm = useSelector(state => state.animeFilms.animeFilmSlider.items);

    useEffect(() => {
        dispatch(fetchAnimeSliderFilm());
    }, [])

    return (
        <div className="anime-film pop-slider">
            <CarouselSlider dataFilm={animeSliderDataFilm}  />
        </div>
    )
}

export default AnimeFilmSlider