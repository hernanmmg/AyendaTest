import React, { Component } from "react";
import RenderArtists from "../../../Artists/components/RenderArtists";

class ArtistsbyGenre extends Component {
  componentDidMount() {
    const { genre_name } = this.props.match.params;
    this.props.fetchArtistsbyGenre(genre_name);
  }

  render() {
    const { artists } = this.props;
    return <RenderArtists artists={artists} />;
  }
}

export default ArtistsbyGenre;
