import styled from "styled-components";

const ItemList = styled.div`
  color: #d6d6d6;
  border-bottom: solid 1px #1e2823;
  line-height: 1.5;
  font-size: 1.25em;
  margin-bottom: 2em;
  display: block;
  position: relative;
  width: 100%;
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    color: #1e2823;
    transition: color 0.1s ease-out;
  }
`;

export default ItemList;
