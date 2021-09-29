import React from "react";
import styled from "styled-components";
function AskSomeThing() {
  return (
    <Wrapper className="section">
      <div className="form-container">
        <form
          action="https://formspree.io/f/xwkawznq"
          method="POST"
          className="form-control"
        >
          <input
            type="email"
            name="_replyto"
            placeholder="이메일을 적어주세요!"
            className="form-input"
          />
          <button type="submit" className="form-btn">
            submit
          </button>
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
  .form-input {
    padding: 0.4rem;
    width: 30vw;
  }
  .form-btn {
    padding: 0.4rem;
  }

  .form-container {
    width: 40vw;
  }
`;
export default AskSomeThing;
