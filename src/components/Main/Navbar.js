import React from "react";
import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { menu } from "../../util/helper";
function Navbar() {
  return (
    <Wrapper>
      <div className="logo">
        <Link to="/" className="logo-p">
          Free-Game
        </Link>
      </div>
      <div className="text">
        {menu.map(({ id, url, text }) => (
          <Link to={url} key={id} className="menu">
            {text}
          </Link>
        ))}
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

  .logo img {
    height: 10vh;
    width: 10vw;
  }
  .icon {
    font-size: 30px;
    color: #fff;
  }
  .logo-p {
    text-decoration: none;
    color: #fff;
    font-size: 3rem;
  }
  .text {
    width: 20vw;
    display: flex;
    justify-content: space-around;
  }
  .menu {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }
`;
export default Navbar;
