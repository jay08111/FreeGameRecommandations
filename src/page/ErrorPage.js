import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <div className="error">
        <h1 className="error-code">404</h1>
        <h1 className="description">
          there is no page that you are looking for
        </h1>
        <div className="link">
          <button className="btn-home">
            <Link to="/" className="home">
              go to home
            </Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  height: 80vh;
  overflow: hidden;
  .error {
    margin-top: 13rem;
    width: 100%;
    height: 60vh;
  }
  h1 {
    text-align: center;
    color: #000;
  }
  .error-code {
    font-size: 9rem;
    margin-bottom: 1.2rem;
  }
  .description {
    font-size: 2.7rem;
    text-transform: uppercase;
  }
  .link {
    margin: 5rem auto;
    text-align: center;
  }
  .home {
    text-decoration: none;
    color: black;
  }
  .btn-home {
    padding: 0.7rem;
    text-transform: capitalize;
    border-radius: 6px;
  }
`;
export default Error;
