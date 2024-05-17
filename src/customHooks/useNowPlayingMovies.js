import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  //Fetch data from tmdb api and update the Storee
  const dispatch = useDispatch();

  //Memoization
  const nowPlayingMoviezz = useSelector((store)=>store.movies.nowPlayingMovies);
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
      dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    if(!nowPlayingMoviezz)
    getNowPlayingMovies();
},[]);

}

export default useNowPlayingMovies;