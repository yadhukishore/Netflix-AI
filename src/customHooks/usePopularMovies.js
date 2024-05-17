import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {
  //Fetch data from tmdb api and update the Storee
  const dispatch = useDispatch();

  //Memoization
  const popularz = useSelector((store)=>store.movies.usePopularMovies);
  
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
      dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
    if(!popularz)
    getPopularMovies();
},[]);

}

export default usePopularMovies;