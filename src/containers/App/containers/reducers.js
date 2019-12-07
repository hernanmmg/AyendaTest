import {
  ERROR_MANAGER,
  RESET_REDUCERS,
  SET_ALBUMS_BY_ARTISTS,
  SET_ARTISTS,
  SET_GENRES,
  SET_RANDOM_SONG,
  SET_SONGS_BY_ALBUM
} from "./constants";

export const initialState = {
  error: null,
  loading: false,
  artists: [],
  albums: [],
  genres: [],
  songs: [],
  randomsong: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: action.artists,
        loading: false
      };
    case ERROR_MANAGER:
      return {
        ...state,
        error: true,
        loading: false
      };
    case RESET_REDUCERS:
      return {
        ...state,
        error: false,
        loading: true
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.genres,
        loading: false
      };
    case SET_ALBUMS_BY_ARTISTS:
      return {
        ...state,
        albums: action.albums,
        loading: false
      };
    case SET_SONGS_BY_ALBUM:
      return {
        ...state,
        songs: action.songs,
        loading: false
      };
    case SET_RANDOM_SONG:
      return {
        ...state,
        randomsong: action.song,
        loading: false
      };
    default:
      return state;
  }
};

export default appReducer;
