import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterdGameData: [],
  options: {
    genre: "all",
    platform: "all of companies",
    publisher: "all publishers",
    release_date: "2000-01-01",
  },
};

const gameFilterSlice = createSlice({
  name: "gameFilter",
  initialState,
  reducers: {
    setFilterdData: (state, { payload }) => {
      state.filterdGameData = payload;
      console.log(state.filterdGameData);
    },
    setOptions: (state, { payload }) => {},
  },
});

export const { setFilterdData } = gameFilterSlice.actions;
export default gameFilterSlice.reducer;
