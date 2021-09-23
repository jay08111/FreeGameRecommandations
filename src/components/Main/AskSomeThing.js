import React from "react";
import styled from "styled-components";
function AskSomeThing() {
  return (
    <Wrapper className="section">
      <div>
        <form
          action="https://formspree.io/f/xwkawznq"
          method="POST"
          className="form-control"
        >
          <input
            type="email"
            name="_replyto"
            placeholder="이메일을 적어주세요!"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  .form-control {
    margin-right: 1rem;
  }
`;
export default AskSomeThing;
