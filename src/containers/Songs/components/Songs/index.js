import React, { Component } from "react";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import ItemList from "../../../../components/ItemList";
import Row from "./styles/Row";

class Songs extends Component {
  componentDidMount() {
    this.SongsbyAlbum();
  }

  SongsbyAlbum = () => {
    const { params } = this.props.match;
    this.props.fetchSongsbyAlbum(params.id);
  };

  handleClickArtist = () => {
    console.log("clicked");
  };

  render() {
    const { songs } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            {songs &&
              songs.map((song, index) => (
                <ItemList key={`Songs-${index}`}>{song.name}</ItemList>
              ))}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Songs;
