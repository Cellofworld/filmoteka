import ReactPlayer from "react-player"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function VideoPlayerFilm() {

   const {id} = useParams();

    const [filmVideo, setFilmVideo] = useState();

    const loadVideo = async () => {

        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'b2d3263f-b5f6-41a8-a9d3-95d7ccc68971',
                'Content-Type': 'application/json',
            },
        });
        const filmsData = await response.json();

        setFilmVideo(filmsData)
    }

    useEffect(() => {
        loadVideo()
    }, [])


  if (filmVideo === undefined) return <div>Loading</div>
  if (filmVideo.total <= 1) return <div className="no-video">No video</div>
  
     return (


        <div className="single-page-player">
                <ReactPlayer 
                url={filmVideo.items.find(el => el.site === 'YOUTUBE').url}
                width='900px'
                height='400px'
                controls={true}
                />
        </div>
    )
}

export default VideoPlayerFilm