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
    dispatch(resetReducer);
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

const searchSongs = length => {
  const index = Math.floor(Math.random() * length);
  return index;
};

export const fetchSongToListen = (albunm_id, song_id) => {
  return async dispatch => {
    dispatch(resetReducer);
    try {
      // fetch
      const songsData = await clientUrl(`/albums/${albunm_id}/songs`);
      let data = [];
      if (songsData) {
        // Verify length of songs
        if (songsData.length > 3) {
          // copy array
          const songs = [...songsData];
          // find song from params
          let value = songs.find(song => song.id === parseInt(song_id));
          let i = 0;
          // search two songs more
          while (i < 3) {
            if (i === 0) data.push(value);
            else {
              value = searchSongs(songs.length);
              // add item to new array
              data.push(songs[value]);
            }
            // delete item from array parent
            for (const [index, el] of songs.entries()) {
              if (el.id === value.id) {
                songs.splice(index, 1);
                break;
              }
            }
            i++;
          }
        } else {
          data = songsData;
        }
        dispatch(setRandomSong(data));
      } else {
        throw new Error("Data notFound");
      }
    } catch (error) {
      console.log(error);
      dispatch(setErrorManager(error));
    }
  };
};
