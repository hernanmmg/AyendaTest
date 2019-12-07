import React, { Component } from "react";
import RenderArtists from "../RenderArtists";

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists } = this.props;
    return <RenderArtists artists={artists} />;
  }
}

export default Artists;
