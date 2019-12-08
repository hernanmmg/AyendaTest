import React, { Component } from "react";
import RenderArtists from "../RenderArtists";

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists, history } = this.props;
    return <RenderArtists history={history} artists={artists} />;
  }
}

export default Artists;
