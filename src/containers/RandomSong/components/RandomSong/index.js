import React, { Component } from "react";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Row from "./styles/Row";

class RandomSong extends Component {
  componentDidMount() {
    this.RandomSong();
  }

  RandomSong = () => {
    const { params } = this.props.match;
    this.props.fetchRandomSong(params.genre_name);
  };

  render() {
    const { randomsong } = this.props;
    return (
      <Container>
        <Content>
          <Row>
            {randomsong && (
              <React.Fragment>
                <audio src={randomsong.preview_url} controls autoplay loop />
                {randomsong.error && <h3>{randomsong.error}</h3>}
              </React.Fragment>
            )}
          </Row>
        </Content>
      </Container>
    );
  }
}

export default RandomSong;
