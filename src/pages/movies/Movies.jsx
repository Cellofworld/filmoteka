

import FilmsMain from "../../components/filmsComponents/filmsMain"
import FilmSlider from "../../components/filmsComponents/filmsSlider"
import "./movies.css"

function Movies() {
    return (
        <div className="movies">
            <FilmSlider />
            <FilmsMain />
        </div>
    )
}
export default Movies