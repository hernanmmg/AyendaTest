import React, { Component } from "react";
import Card from "../../../../components/Card";
import { Text } from "../../../../components/Card/styles";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Loader from "../../../../components/Loader";
import Row from "./styles/Row";

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  handleClickArtist = () => {
    console.log("clicked");
  };

  textComponent = txtName => <Text>{txtName}</Text>;

  render() {
    const { artists } = this.props;
    if (!artists) return <Loader />;
    return (
      <Container>
        <Content>
          <Row>
            {artists &&
              artists.map(artist => (
                <Card
                  onClickEvent={this.handleClickArtist}
                  key={`artist-${artist.id}`}
                  image={artist.image}
                  textComponent={this.textComponent(artist.name)}
                />
              ))}
            {}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Artists;
