import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();

 


  return (
    <div>
      <Header />
      {
        showGptSearch?(<GptSearch/>):(
         <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
         )
      }
      
      {/* 
      Main Container
       -video bg
       -video Title
      Secondary Container
       -MovieList *n
        -cards*n
      
      */}
    </div>
  );
};

export default Browse;
