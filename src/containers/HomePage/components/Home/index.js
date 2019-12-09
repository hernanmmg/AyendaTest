import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import { Container, HomeWrapper } from "./styles";

class Home extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  randomGenre() {
    const { genres, history } = this.props;
    const random = Math.floor(Math.random() * genres.length);
    history.push(`/genres/${genres[random]}/random_song`);
  }

  handleRandomSong = () => {
    this.randomGenre();
  };

  render() {
    return (
      <HomeWrapper>
        <h1>Navigation</h1>

        <Container>
          <Button
            type="button"
            id="buttonPlaySong"
            onClick={this.handleRandomSong}
          >
            Play a random song
          </Button>
          <ul>
            <li>
              <Link to="/genres">/genres</Link>
            </li>
            <li>
              <Link to="/artists">/artists</Link>
            </li>
          </ul>
        </Container>
      </HomeWrapper>
    );
  }
}

export default Home;
