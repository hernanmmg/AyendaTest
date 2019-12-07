import React from "react";
import { Block, Item } from "./styles";

const Card = ({
  image,
  onClickEvent,
  textComponent,
  classNamed = "eventListener"
}) => (
  <Block>
    <div className={classNamed} onClick={onClickEvent}>
      <Item image={image} />
      {textComponent}
    </div>
  </Block>
);

export default Card;
