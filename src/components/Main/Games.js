import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Games() {
  const { gameData } = useSelector((state) => state.game);
  return <h1>Games Component</h1>;
}

export default Games;
