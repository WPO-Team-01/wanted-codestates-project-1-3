import { configureStore } from "@reduxjs/toolkit";
import contentsReducer from "./contents/contentsSlice";

const store = configureStore({
  reducer: {},
});

export default store;
