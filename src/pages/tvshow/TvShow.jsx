import TvShowMain from "../../components/tvShowComponents/TvShowMain"
import TvShowSlider from "../../components/tvShowComponents/TvShowSlider"

function Tvshow() {
    return (
        <div className="tvShow-page">
            <TvShowSlider />
            <TvShowMain />
        </div>
    )
}
export default Tvshow