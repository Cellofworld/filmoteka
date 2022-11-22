
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTvShowSlider } from "../../store/tvShowSlice/fetchingTvShowSlider";
import CarouselSlider from "../slider/SliderPopRelises";




function TvShowSlider() {

    const dispatch = useDispatch();

    const tvShowSliderData = useSelector(state => state.tvShow.tvShowFilmSlider.items)

    useEffect(() => {
        dispatch(fetchTvShowSlider())
    }, [])

    return (
        <div className="tvShow-slider">
            <CarouselSlider dataFilm={tvShowSliderData} />
        </div>
    )
}

export default TvShowSlider