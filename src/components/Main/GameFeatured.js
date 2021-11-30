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
  return <h1>GameFeatured Component</h1>;
}
const Wrapper = styled.section``;
export default GameFeatured;
