import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
function Loading({ type, color }) {
  return (
    <div>
      <ReactLoading type={"spin"} color={"#000"} height={"20%"} width={"20%"} />
    </div>
  );
}

export default Loading;
