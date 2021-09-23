import React from "react";
import styled from "styled-components";
import { SingleImage, Explain, AddMyList, GameUrls } from "../index";
import { useSelector } from "react-redux";
function SingleGame() {
  const { singleGameData } = useSelector((state) => state.game);
  const {
    id,
    description,
    developer,
    freetogame_profile_url: profile,
    game_url: game,
    genre,
    platform,
    publisher,
    release_date: date,
    screenshots,
    thumbnail,
  } = singleGameData;
  console.log(singleGameData);
  return (
    <Wrapper>
      <SingleImage thumbnail={thumbnail} screenshots={screenshots} />
      <Explain
        description={description}
        developer={developer}
        genre={genre}
        platform={platform}
        publisher={publisher}
        date={date}
      />
      <GameUrls profile={profile} game={game} />
      <AddMyList />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background-color: #000;
`;
export default SingleGame;
