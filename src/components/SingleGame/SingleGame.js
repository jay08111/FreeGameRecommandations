import React from "react";
import styled from "styled-components";
import { SingleImage, Explain, AddMyList } from "../index";
function SingleGame() {
  return (
    <Wrapper>
      <SingleImage />
      <Explain />
      <AddMyList />
    </Wrapper>
  );
}
const Wrapper = styled.article``;
export default SingleGame;
