import React from "react";
import styled from "styled-components";
import { Games } from "../index";
import { Link } from "react-router-dom";
function GameFeatured() {
  return (
    <Wrapper>
      <h1>Games</h1>
      <Games />
      <Link to="/games">More Games</Link>
    </Wrapper>
  );
}
const Wrapper = styled.section``;
export default GameFeatured;
