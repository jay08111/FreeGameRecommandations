import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <h1>
        &copy; Copyright <br />
      </h1>
      <h1>{new Date().getFullYear()} Made by Hoyeoun Byun</h1>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: #2b2b2b;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Footer;
