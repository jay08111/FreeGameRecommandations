import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
function GamePageGames() {
  const { gameData } = useSelector((state) => state.game);
  return (
    <Wrapper className="section">
      {gameData.slice(0, 30).map((game) => {
        const { thumbnail, title, id } = game;
        return (
          <div key={id} className="games">
            <Link to={`/games/${id}`}>
              <img src={thumbnail} alt={title} />
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10rem;
  .games {
    margin: 2rem;
  }
`;
export default GamePageGames;
