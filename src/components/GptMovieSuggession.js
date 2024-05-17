import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./movieList";

const GptMovieSuggession = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null; // i will try shimmer later

  return (
    <div className="-mt-96 mb-0 mx-0 p-4 m-4  bg-black text-white rounded-3xl ">
      <div>
        <h1>These may be the best Movies...</h1>
        {movieNames.map((mov,index) => (
          <MovieList
            key={mov}
            title={mov}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggession;
