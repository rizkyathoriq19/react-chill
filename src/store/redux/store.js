import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});

export default store;
