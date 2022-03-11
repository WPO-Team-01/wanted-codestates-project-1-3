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
    setAvaiable: (state, action) => {
      state.available = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    allSelect: (state) => {
      const moveSelect = state.available;
      state.available = [];
      state.selected = [...state.selected, ...moveSelect];
    },
    allRemoveSelect: (state) => {
      const removeSelect = state.selected;
      state.available = [...state.available, ...removeSelect];
      state.selected = [];
    },
    moveToSelect: (state, action) => {
      const remove = state.available.filter(
        (item) => !action.payload.includes(item.id),
      );
      const select = state.available.filter((item) =>
        action.payload.includes(item.id),
      );

      state.available = remove;
      state.selected = [...state.selected, ...select];
    },
    removeFromSelect: (state, action) => {
      const removed = state.selected.filter((item) =>
        action.payload.includes(item.id),
      );
      const selected = state.selected.filter(
        (item) => !action.payload.includes(item.id),
      );
      state.available = [...state.available, ...removed];
      state.selected = selected;
    },
  },
});

export const {
  initialization,
  allSelect,
  moveToSelect,
  removeFromSelect,
  setAvaiable,
  setSelected,
  allRemoveSelect,
} = contentsSlice.actions;

export default contentsSlice.reducer;
