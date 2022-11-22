
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartoonsSlider } from "../../store/cartoonsSlice/fetchingCartoonSlider";
import CarouselSlider from "../slider/SliderPopRelises";




function CartoonsSlider() {

    const dispatch = useDispatch();

    const cartoonsSliderData = useSelector(state => state.cartoonFilms.cartoonFilmSlider.items)

    useEffect(() => {
        dispatch(fetchCartoonsSlider())
    }, [])

    return (
        <div>
            <CarouselSlider dataFilm={cartoonsSliderData} />
        </div>
    )
}

export default CartoonsSlider