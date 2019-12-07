import styled from "styled-components";

const HomeWrapper = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  li {
    font-size: 1.5em;
    a {
      color: white;
    }
  }

  button {
    margin-right: 2em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, HomeWrapper };
