import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeImg from "../../assets/home.svg";

const BackStyles = styled.div`
  position: fixed;
  left: 1%;
  top: 2%;
  cursor: pointer;
`;

const Back = () => (
  <BackStyles>
    <Link to="/">
      <img src={homeImg} alt="Home" width="42" height="42" />
    </Link>
  </BackStyles>
);

export default Back;
