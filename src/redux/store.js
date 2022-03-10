import { configureStore } from "@reduxjs/toolkit";
import contentsReducer from "./contents/contentsSlice";

const store = configureStore({
  reducer: {
    contents: contentsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
