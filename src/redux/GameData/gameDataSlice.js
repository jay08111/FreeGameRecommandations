import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { game } from "../../util/helper";
import { singleGame } from "../../util/helper";
const initialState = {
  gameData: [],
  loading: false,
  singleGameData: [],
};
export const fetchData = createAsyncThunk(
  "game/fetchData",
  async (id = null) => {
    if (id !== null) {
      const res = await axios.get(singleGame);
      return { data: res.data, id: id };
    }
    const res = await axios.get(game);
    return { data: res.data, id: null };
  }
);
export const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.id !== null) {
          state.singleGameData = payload.data;
        } else {
          state.gameData = payload.data;
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const {} = gameDataSlice.actions;
export default gameDataSlice.reducer;
