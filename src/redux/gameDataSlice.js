import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { game } from "../util/helper";
const initialState = {
  gameData: [],
  loading: false,
};
export const fetchData = createAsyncThunk("game/fetchData", async () => {
  const res = await axios.get(game);
  return res;
});
export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.gameData = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const { setLoading } = gameDataSlice.actions;
export default gameDataSlice.reducer;
