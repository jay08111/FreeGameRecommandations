import React from "react";
import styled from "styled-components";
function Filter() {
  return (
    <Container>
      <form>
        <input type="text" />
        <h3>Category</h3>
      </form>
    </Container>
  );
}
const Container = styled.div`
  width: 14vw;
  background-color: #333;
`;
export default Filter;
