import React from "react";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
function Navbar() {
  return (
    <Wrapper>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />
      </div>
      <div className="text">
        <input type="text" />
      </div>
      <div className="icon">
        <BiLogIn />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  width: 100vw;
  height: 10vh;
  background: #1d1338;
  background: -webkit-radial-gradient(left, #1d1338, #012037);
  background: -moz-radial-gradient(left, #1d1338, #012037);
  background: radial-gradient(to right, #1d1338, #012037);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .text input {
    width: 40vw;
    margin-right: 5rem;
  }

  .logo img {
    height: 10vh;
    width: 10vw;
  }
  .icon {
    font-size: 30px;
    color: #fff;
  }
`;
export default Navbar;
