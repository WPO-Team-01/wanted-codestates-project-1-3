import { initialData } from "../data";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  available: initialData,
  selected: [],
};

export const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    initialization: (state) => {
      state.available = initialData;
      state.selected = [];
    },
    allSelect: (state) => {
      state.available = [];
      state.selected = initialData;
    },
    moveToSelect: (state, action) => {
      const remove = state.available.filter(
        (item) => !action.payload.includes(item.id),
      );
      const select = state.available.filter((item) =>
        action.payload.includes(item.id),
      );
      state.available = remove;
      state.selected = select;
    },
    removeFromSelect: (state, action) => {
      const removed = state.selected.filter((item) =>
        action.payload.includes(item.id),
      );
      const selected = state.selected.filter(
        (item) => !action.payload.includes(item.id),
      );
      state.available = state.available.concat(removed);
      state.selected = selected;
    },
  },
});

export const { initialization, allSelect, moveToSelect, removeFromSelect } =
  contentsSlice.actions;

export default contentsSlice.reducer;
