import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
function Games() {
  const { gameData } = useSelector((state) => state.game);
  return (
    <Wrapper>
      {gameData.slice(0, 6).map((games) => {
        const { id, title, thumbnail, short_description: des } = games;
        return (
          <article key={id} className="pictures">
            <div className="data-div">
              <img src={thumbnail} alt={title} className="thumbnail" />
              <p>{des}</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 60vh;
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
