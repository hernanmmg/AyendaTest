import {
  fetchAlbumsbyArtists,
  fetchArtists,
  fetchArtistsbyGenre,
  fetchGenres,
  fetchRandomSong,
  fetchSongsbyAlbum
} from "./actions";

export const mapStateToProps = ({ appReducer }) => {
  return { ...appReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchArtists: () => {
    dispatch(fetchArtists());
  },
  fetchGenres: () => {
    dispatch(fetchGenres());
  },
  fetchAlbumsbyArtists: artistId => {
    dispatch(fetchAlbumsbyArtists(artistId));
  },
  fetchSongsbyAlbum: albumId => {
    dispatch(fetchSongsbyAlbum(albumId));
  },
  fetchRandomSong: genre_name => {
    dispatch(fetchRandomSong(genre_name));
  },
  fetchArtistsbyGenre: genre_name => {
    dispatch(fetchArtistsbyGenre(genre_name));
  }
});
