import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideoMemoz = useSelector((store)=>store.movies.trailerVideo);
    // Fetch trailer Video
    const getVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter((video) => video.type === "Clip");
      const trailer = filterData.length ? filterData[0] : json.results[0];
   
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      if(!trailerVideoMemoz)
      getVideo();
    }, []);
}

export default useMovieTrailer;