import React from "react";
import Loader from "../../../../components/Loader";
import RandomSong from "../../../RandomSong/components/RandomSong";

class PlaySong extends RandomSong {
  componentDidMount() {
    const { album_id, song_id } = this.props.match.params;
    this.props.fetchSongToListen(album_id, song_id);
  }

  renderSong = () => {
    const { randomsong } = this.props;
    if (!randomsong) return <Loader />;
    return (
      <React.Fragment>
        {randomsong &&
          randomsong.map(song => (
            <div key={`Song-${song.id}`}>
              <p style={{ color: "white", textAlign: "center" }}>{song.name}</p>
              <audio
                key={`Song-${song.id}`}
                src={song.preview_url}
                controls
                loop
              />
              {song.preview_url === null ? (
                <h3 style={{ textAlign: "center" }}>Preview not available</h3>
              ) : null}
            </div>
          ))}
      </React.Fragment>
    );
  };
}

export default PlaySong;
