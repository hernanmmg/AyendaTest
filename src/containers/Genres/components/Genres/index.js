import React, { Component } from "react";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import ItemList from "../../../../components/ItemList";
import Row from "./styles/Row";

class Genres extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  handleClickArtist = () => {
    console.log("clicked");
  };

  render() {
    const { genres } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            {genres &&
              genres.map((artist, index) => (
                <ItemList key={`Genre-${index}`}>
                  {artist.split("_").join(" ")}
                </ItemList>
              ))}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default Genres;
