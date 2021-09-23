import React from "react";
import styled from "styled-components";
import { Purpose, AskSomeThing, GameFeatured } from "../components/index";
function Home() {
  return (
    <Wrapper>
      <Purpose />
      <GameFeatured />
      <AskSomeThing />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  background: linear-gradient(#868f96, #596164);
  background: #020202;
  background: -webkit-radial-gradient(left, #020202, #012037);
  background: -moz-radial-gradient(left, #020202, #012037);
  background: radial-gradient(to right, #020202, #012037);
`;
export default Home;
