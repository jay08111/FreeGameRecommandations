import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/GameData/gameDataSlice";
import styled from "styled-components";
import { Hero, SingleGame } from "../components/index";
function SingleGamePage() {
  const { gameData } = useSelector((state) => state.game);
  const { id } = gameData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <Hero />
      <SingleGame />
    </Wrapper>
  );
}
const Wrapper = styled.main``;
export default SingleGamePage;
