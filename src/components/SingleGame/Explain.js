import React from "react";
import styled from "styled-components";
function Explain({ description, developer, genre, platform, publisher, date }) {
  return (
    <Wrapper>
      <div>
        <p>descripton : {description}</p>
        <p>developer : {developer}</p>
        <p>genre:{genre}</p>
        <p>platform : {platform}</p> <p>publisher:{publisher}</p>
        <p>release date:{date}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin-top: 4rem;
  p {
    color: #fff;
  }
`;
export default Explain;
