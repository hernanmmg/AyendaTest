import React, { Component } from "react";
import Card from "../../../../components/Card";
import { Text2 } from "../../../../components/Card/styles";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Row from "../../../Artists/components/Artists/styles/Row";

class Albums extends Component {
  componentDidMount() {
    this.AlbumsbyArtists();
  }

  AlbumsbyArtists = () => {
    const { params } = this.props.match;
    this.props.fetchAlbumsbyArtists(params.id);
  };

  handleClickArtist = () => {
    console.log("clicked");
  };

  textComponent = name => <Text2>{name}</Text2>;

  render() {
    const { albums } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            {albums &&
              albums.map(album => (
                <Card
                  onClickEvent={this.handleClickArtist}
                  key={`artist-${album.id}`}
                  image={album.image}
                  textComponent={this.textComponent(album.name)}
                  classNamed={"eventListener2"}
                />
              ))}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Albums;
