import React from "react";
import styled from "styled-components";
import Loading from "./styles";

const PageLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Loader = () => (
  <PageLoader>
    <Loading>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Loading>
  </PageLoader>
);

export default Loader;
