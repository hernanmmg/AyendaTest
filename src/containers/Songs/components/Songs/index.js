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

  handleClickArtist = songId => {
    const { id: albumId } = this.props.match.params;
    this.props.history.push(`/album/${albumId}/song/${songId}/play`);
  };

  render() {
    const { songs } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            {songs &&
              songs.map(song => (
                <ItemList
                  onClick={() => this.handleClickArtist(song.id)}
                  key={`Songs-${song.id}`}
                >
                  {song.name}
                </ItemList>
              ))}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Songs;
