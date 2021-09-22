import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gameFilterSlice = createSlice({
  name: "gameFilter",
  initialState,
  reducers: {},
});

export const { setloading } = gameFilterSlice.actions;
export default gameFilterSlice.reducer;
