import React from "react";
import styled from "styled-components";
import { Games, Loading } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function GameFeatured() {
  const { loading } = useSelector((state) => state.game);
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper className="section">
      <h1>Games</h1>
      <Games />
      <Link to="/games">More Games</Link>
    </Wrapper>
  );
}
const Wrapper = styled.section``;
export default GameFeatured;
