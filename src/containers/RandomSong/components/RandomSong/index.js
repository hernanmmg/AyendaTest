import React, { Component } from "react";
import Container from "../../../../components/Container";
import Content from "../../../../components/Content";
import Loader from "../../../../components/Loader";
import Row from "./styles/Row";

class RandomSong extends Component {
  componentDidMount() {
    this.RandomSong();
  }

  RandomSong = () => {
    const { params } = this.props.match;
    this.props.fetchRandomSong(params.genre_name);
  };

  renderSong = () => {
    const { randomsong } = this.props;
    return (
      <React.Fragment>
        {randomsong && (
          <React.Fragment>
            <p style={{ color: "white" }}>{randomsong.name}</p>
            <audio
              key={`Song-${randomsong.id}`}
              src={randomsong.preview_url}
              controls
              loop
            />
            {randomsong.preview_url === null ? (
              <h3 style={{ textAlign: "center" }}>Preview not available</h3>
            ) : null}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  render() {
    const { randomsong } = this.props;
    if (!randomsong) return <Loader />;
    return (
      <Container>
        <Content>
          <Row>{this.renderSong()}</Row>
        </Content>
      </Container>
    );
  }
}

export default RandomSong;
