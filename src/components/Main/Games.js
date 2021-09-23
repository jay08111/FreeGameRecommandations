import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Games() {
  const { gameData } = useSelector((state) => state.game);
  return (
    <Wrapper>
      {gameData.slice(0, 6).map((games) => {
        const { id, title, thumbnail, short_description: des } = games;
        return (
          <article key={id} className="pictures">
            <div className="data-div">
              <Link to={`/games/${id}`}>
                <img src={thumbnail} alt={title} className="thumbnail" />
              </Link>
              <p>{des}</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .pictures {
    width: 30vw;
  }
  p {
    color: #fff;
  }
  .thumbnail {
  }
  .data-div {
  }
`;
export default Games;
