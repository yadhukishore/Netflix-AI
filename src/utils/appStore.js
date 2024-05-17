import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer: {
        user:userSlice,
        movies:movieSlice,
        gpt: gptSlice,
        config:configSlice
    },
});

export default appStore;