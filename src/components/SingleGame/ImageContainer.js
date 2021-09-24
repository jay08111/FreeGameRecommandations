import React from "react";
import styled from "styled-components";
import { Explain } from "../index";
import { useSelector } from "react-redux";
function SingleImage() {
  const { singleGameData } = useSelector((state) => state.game);
  const {
    description,
    developer,
    genre,
    platform,
    publisher,
    release_date: date,
    screenshots,
    thumbnail,
  } = singleGameData;
  return (
    <Wrapper className="section">
      <div>
        <img src={thumbnail} alt="main" className="thumbnail" />
      </div>
      <Explain
        description={description}
        developer={developer}
        genre={genre}
        platform={platform}
        publisher={publisher}
        date={date}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  .thumbnail {
    display: inline-block;
    width: 40vw;
  }
`;
export default SingleImage;
