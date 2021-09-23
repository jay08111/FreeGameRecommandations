import React from "react";
import styled from "styled-components";
import { SingleImage, Explain, AddMyList } from "../index";
import { useSelector } from "react-redux";
function SingleGame() {
  const { singleGameData } = useSelector((state) => state.game);
  console.log(singleGameData);
  return (
    <Wrapper>
      <h1>single game page</h1>
      <SingleImage />
      <Explain />
      <AddMyList />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background-color: #000;
`;
export default SingleGame;
