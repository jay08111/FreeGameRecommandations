import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Hero({ title }) {
  return (
    <Wrapper>
      <Link to="/games">Games</Link> / {title}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: #2b1f2a;
`;
export default Hero;
