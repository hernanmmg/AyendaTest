import React from "react";
import Card from "../../../../components/Card";
import { Text } from "../../../../components/Card/styles";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Loader from "../../../../components/Loader";
import Row from "./styles/Row";

const RenderArtists = ({ artists, history }) => {
  const handleClickArtist = id => {
    history.push(`/artists/${id}/albums`);
  };

  const textComponent = txtName => <Text>{txtName}</Text>;

  if (!artists) return <Loader />;
  return (
    <Container>
      <Content>
        <Row>
          {artists &&
            artists.map(artist => (
              <Card
                onClickEvent={handleClickArtist}
                key={`artist-${artist.id}`}
                textComponent={textComponent(artist.name)}
                {...artist}
              />
            ))}
        </Row>
      </Content>
    </Container>
  );
};

export default RenderArtists;
