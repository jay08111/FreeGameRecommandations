import { configureStore } from "@reduxjs/toolkit";
import gameData from "../redux/GameData/gameDataSlice";
import gameFilter from "../redux/GameFilter/gameFilterSlice";
export const store = configureStore({
  reducer: {
    game: gameData,
    filter: gameFilter,
  },
});
