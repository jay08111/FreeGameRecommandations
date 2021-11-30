import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
function GamePageGames() {
  const { gameData } = useSelector((state) => state.game);
  const { filterdGameData } = useSelector((state) => state.filter);
  return <h1>GamePageGames Component</h1>;
}

export default GamePageGames;
