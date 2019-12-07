import clientUrl from "../../../config/api";
import {
  ERROR_MANAGER,
  RESET_REDUCERS,
  SET_ALBUMS_BY_ARTISTS,
  SET_ARTISTS,
  SET_GENRES,
  SET_RANDOM_SONG,
  SET_SONGS_BY_ALBUM
} from "./constants";

export const setArtists = artists => ({
  type: SET_ARTISTS,
  artists
});

export const setGenres = genres => ({
  type: SET_GENRES,
  genres
});

export const setAlbumsbyArtists = albums => ({
  type: SET_ALBUMS_BY_ARTISTS,
  albums
});

export const setErrorManager = error => ({
  type: ERROR_MANAGER,
  error
});

export const resetReducer = () => ({
  type: RESET_REDUCERS
});

export const setSongsbyAlbum = songs => ({
  type: SET_SONGS_BY_ALBUM,
  songs
});

export const setRandomSong = song => ({
  type: SET_RANDOM_SONG,
  song
});

export const fetchGenres = () => {
  return async dispatch => {
    try {
      const data = await clientUrl("/genres");
      dispatch(setGenres(data));
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};

export const fetchAlbumsbyArtists = artistId => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      const data = await clientUrl(`/artists/${artistId}/albums`);
      dispatch(setAlbumsbyArtists(data));
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};

export const fetchArtists = () => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      const data = await clientUrl("/artists");
      dispatch(setArtists(data));
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};

export const fetchSongsbyAlbum = albumId => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      const data = await clientUrl(`/albums/${albumId}/songs`);
      dispatch(setSongsbyAlbum(data));
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};

export const fetchRandomSong = genre_name => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      const data = await clientUrl(`/genres/${genre_name}/random_song`);
      dispatch(setRandomSong(data));
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};

export const fetchArtistsbyGenre = genre_name => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      const artists = await clientUrl("/artists");

      if (artists) {
        const data = artists.filter(artist =>
          artist.genres.includes(genre_name)
        );
        dispatch(setArtists(data));
      } else {
        throw new Error("Data notFound");
      }
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};
