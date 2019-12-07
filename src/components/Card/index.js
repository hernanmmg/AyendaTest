import React from "react";
import { Block, Item } from "./styles";

const Card = ({
  image,
  id: artistId,
  onClickEvent,
  textComponent,
  classNamed = "eventListener"
}) => (
  <Block>
    <div className={classNamed} onClick={() => onClickEvent(artistId)}>
      <Item image={image} />
      {textComponent}
    </div>
  </Block>
);

export default Card;
