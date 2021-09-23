import React from "react";
import styled from "styled-components";
function Purpose() {
  return (
    <Wrapper className="section">
      <article className="left">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          nostrum, impedit fugiat corporis earum aperiam itaque explicabo nobis
          id accusantium corrupti praesentium sapiente, recusandae consequuntur
          enim expedita ducimus accusamus voluptates laboriosam? Dolores,
          repellat officiis debitis aspernatur labore facilis voluptatum
          nostrum? Quisquam molestiae, pariatur deserunt perspiciatis ut ad
          error nemo. Quos delectus minima inventore excepturi modi,
          consequuntur id veniam quasi quam ullam corrupti perspiciatis
          temporibus, praesentium accusamus vero accusantium, reprehenderit
          recusandae.
        </h1>
      </article>
      <article className="right">
        <h1>pic</h1>
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;

  .left {
    flex: 1;
  }
  .left h1 {
    text-align: center;
    margin: 12rem auto;
  }
  .right {
    flex: 1;
  }
`;
export default Purpose;
