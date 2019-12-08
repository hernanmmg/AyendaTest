import React from "react";
import { Block, Item } from "./styles";

const Card = ({
  image,
  id,
  name,
  onClickEvent,
  textComponent,
  classNamed = "eventListener"
}) => (
  <Block>
    <div className={classNamed} onClick={() => onClickEvent(id)}>
      <Item>
        <img src={image} alt={name} width="173" height="173" />
      </Item>
      {textComponent}
    </div>
  </Block>
);

export default Card;
