import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useState } from "react";

const VideoBG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <div className="w-screen">
      {trailerVideo?.key && (
        <div>
          <iframe
            className="w-screen aspect-video object-cover"
            src={`https://www.youtube.com/embed/${
              trailerVideo.key
            }?autoplay=1&controls=0&mute=${isMuted ? 1 : 0}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="absolute right-5 bottom-48 z-200">
            <button
              onClick={toggleMute}
              className="bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-md hover:bg-opacity-70 transition duration-300"
            >
              {isMuted ? "Audio" : "Mute"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBG;
