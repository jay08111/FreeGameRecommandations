import React from "react";
import styled from "styled-components";
import {
  ImageContainer,
  Explain,
  AddMyList,
  GameUrls,
  Loading,
} from "../index";
import { useSelector } from "react-redux";
function SingleGame() {
  const { singleGameData, loading } = useSelector((state) => state.game);
  const { freetogame_profile_url: profile, game_url: game } = singleGameData;
  console.log(singleGameData);
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div>
        <ImageContainer />
      </div>
      <GameUrls profile={profile} game={game} />
      <AddMyList />
    </Wrapper>
  );
}
const Wrapper = styled.article`
  background-color: #000;
`;
export default SingleGame;
