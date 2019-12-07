import styled from "styled-components";

const Item = styled.div`
  width: 173px;
  height: 173px;
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
`;

const Text = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  color: #fbfafa;
  cursor: pointer;
  text-align: center;
`;

const Text2 = styled(Text)`
  top: inherit;
  font-size: 0.8em;
  bottom: -30px;
`;

const Block = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .eventListener {
    position: relative;
    margin: 15px;
  }

  .eventListener2 {
    position: relative;
    margin: 30px 15px;
  }

  @media (min-width: 480px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  @media (min-width: 1400px) {
    width: 20%;
  }
`;

export { Block, Text, Item, Text2 };
