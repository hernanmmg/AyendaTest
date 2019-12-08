import React from "react";
import RandomSong from "../../../RandomSong/components/RandomSong";

class PlaySong extends RandomSong {
  componentDidMount() {
    const { album_id, song_id } = this.props.match.params;
    this.props.fetchSongToListen(album_id, song_id);
  }

  renderSong = () => {
    const { randomsong } = this.props;
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
            </div>
          ))}
      </React.Fragment>
    );
  };
}

export default PlaySong;
