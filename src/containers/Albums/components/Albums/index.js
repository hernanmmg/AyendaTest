import React, { Component } from "react";
import Card from "../../../../components/Card";
import { Text2 } from "../../../../components/Card/styles";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Loader from "../../../../components/Loader";
import Row from "../../../Artists/components/RenderArtists/styles/Row";

class Albums extends Component {
  componentDidMount() {
    this.AlbumsbyArtists();
  }

  AlbumsbyArtists = () => {
    const { params } = this.props.match;
    this.props.fetchAlbumsbyArtists(params.id);
  };

  handleClickArtist = albumId => {
    this.props.history.push(`/albums/${albumId}/songs`);
  };

  textComponent = name => <Text2>{name}</Text2>;

  render() {
    const { albums, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <Container>
        <Content>
          <Row>
            {albums &&
              albums.map(album => (
                <Card
                  onClickEvent={this.handleClickArtist}
                  key={`artist-${album.id}`}
                  textComponent={this.textComponent(album.name)}
                  classNamed={"eventListener2"}
                  {...album}
                />
              ))}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Albums;
