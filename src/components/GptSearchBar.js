import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import gemini from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";
import searchMovieTMDB from "../customHooks/useSearchMovieTMDB";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const basha = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log("handleGptSearchClicked..");


    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: CID Moosa,Don,Dhrisyam,Gadar,Akaashadooth ";
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

    async function run() {
      // For text-only input, use the gemini-pro model
      console.log("In Run func...");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      console.log("get model");
      const prompt = gptQuery;
      console.log("get prompt...");

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      const moviesList = text.split(",");

      console.log("moviesList>>", moviesList);
      const promiseArray=moviesList.map((movie)=>searchMovieTMDB(movie));
      const tmdbResults =await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMoviesResult({movieNames:moviesList,movieResults:tmdbResults}));
    }
    run();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black via-red-950 to-black">
      <form
        className="bg-gray-700 p-4 -mt-96 rounded-lg shadow-md flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[basha].placeholder}
          className="w-[700px] py-2 px-4 bg-gray-600 text-white rounded-l-lg outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-r-lg hover:bg-red-700 transition-colors duration-300"
          onClick={handleGptSearchClick}
        >
          {lang[basha].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
