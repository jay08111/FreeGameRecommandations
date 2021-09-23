import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/GameData/gameDataSlice";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Hero, SingleGame } from "../components/index";
function SingleGamePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);
  const { singleGameData } = useSelector((state) => state.game);
  const { title } = singleGameData;
  return (
    <Wrapper>
      <Hero title={title} />
      <SingleGame />
    </Wrapper>
  );
}
const Wrapper = styled.main``;
export default SingleGamePage;
