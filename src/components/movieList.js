//MovieList.js;-

import { MovieCard } from "./movieCard";

export const MovieList = ({ title, movies }) => {
  // console.log("MOVWWWWWWWWWW", movies);
  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll custom-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};
