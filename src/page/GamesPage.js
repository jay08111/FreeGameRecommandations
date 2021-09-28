import React from "react";
import styled from "styled-components";
import { GamePageGames, Hero } from "../components/index";
import { Filter } from "../components/index";
function Games() {
  return (
    <Wrapper>
      <Hero title="GamePage" />
      <section className="section-center">
        <div className="container">
          <Filter />
        </div>
        <GamePageGames />
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  h1 {
    color: #000;
  }
  .section-center {
    display: flex;
  }
  .container {
    position: sticky;
  }
`;
export default Games;
