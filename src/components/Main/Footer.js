import React from "react";
import styled from "styled-components";
function Footer() {
  return <Wrapper>{new Date().getFullYear()}</Wrapper>;
}

const Wrapper = styled.footer`
  height: 20vh;
`;
export default Footer;
