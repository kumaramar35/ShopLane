import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Loading>
      <div></div>
    </Loading>
  );
};

export default Loader;

const loadingRotateLtoR = keyframes`
  to {
    transform: rotateZ(-360deg);
  }
`;

const Loading = styled.div`
  width: 85vw;
  height: 90vh;
  background-color: white;
  display: grid;
  place-items: center;

  & div {
    height: 5vmax;
    width: 5vmax;
    border-bottom: 5px solid rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    animation: ${loadingRotateLtoR} 800ms linear infinite;
  }
`;
