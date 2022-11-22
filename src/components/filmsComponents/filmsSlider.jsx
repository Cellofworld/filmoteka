
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmSlider } from "../../store/filmsSlice/fetchingFilmSlider";
import CarouselSlider from "../slider/SliderPopRelises";




function FilmSlider() {

    const dispatch = useDispatch();

    const filmSliderData = useSelector(state => state.films.filmSlider.items)

    useEffect(() => {
        dispatch(fetchFilmSlider())
    }, [])

    return (
        <div className="slider-film">
            <CarouselSlider dataFilm={filmSliderData} />
        </div>
    )
}

export default FilmSlider