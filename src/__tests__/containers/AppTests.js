import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fetchMock from "fetch-mock";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchArtists,
  fetchGenres,
  fetchRandomSong
} from "../../containers/App/containers/actions";
import {
  SET_ARTISTS,
  SET_GENRES
} from "../../containers/App/containers/constants";
import HomePage from "../../containers/HomePage/components/Home";
import { history } from "../../helpers";
import artistsJSON from "./data/artists.json";
import genresJSON from "./data/genres.json";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

describe("Testing numbers of artists for /artists", () => {
  describe("fetchArtists - async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("verify length of artists from /artists ", () => {
      // fetchApi -> /artists
      fetchMock.sandbox().mock("/artists", 200);

      const expectedActions = [
        {
          type: SET_ARTISTS,
          artists: artistsJSON
        }
      ];
      const store = mockStore({ artists: [] });

      return store.dispatch(fetchArtists()).then(() => {
        // return of async actions
        expect(store.getActions()[0].artists.length).toEqual(
          expectedActions[0].artists.length
        );
      });
    });
  });
});

describe("Testing response of the endpoint in /genres", () => {
  describe("fetchGenres - async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("check length of response from /artists ", () => {
      // fetchApi -> /genres
      fetchMock.sandbox().mock("/genres", 200);

      const expectedActions = [
        {
          type: SET_GENRES,
          genres: genresJSON
        }
      ];
      const store = mockStore({ genres: [] });

      return store.dispatch(fetchGenres()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("Test Button in HomePage component", () => {
  test("Test click event", () => {
    const pushSpy = jest.spyOn(history, "push");
    const mockProps = {
      fetchGenres: fetchGenres,
      genres: fetchGenres,
      history: pushSpy
    };
    const wrapper = shallow(<HomePage {...mockProps} />);
    wrapper.instance().randomGenre = jest.fn();
    const { randomGenre } = wrapper.instance();
    wrapper.find("#buttonPlaySong").simulate("click");
    expect(randomGenre.mock.calls.length).toEqual(1);
  });
});

describe("Testing play music of /genres/:genre_name/random_song", () => {
  describe("fetchSongToListen - async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("check for play random song ", async () => {
      // fetchApi -> /genres
      fetchMock.sandbox().mock("/genres", 200);
      const store = mockStore({ genres: [], randomsong: {} });

      const genre = await store.dispatch(fetchGenres()).then(() => {
        const random = Math.floor(
          Math.random() * store.getActions()[0].genres.length
        );
        const genreSelected = store.getActions()[0].genres[random];
        return genreSelected;
      });

      fetchMock.sandbox().mock(`/genres/${genre}/random_song`, 200);
      return store.dispatch(fetchRandomSong(genre)).then(() => {
        const playsong = store.getActions()[1].song.preview_url;
        if (playsong !== null) {
          console.log("Listin to music: ", playsong);
        } else {
          console.log("Preview not available");
        }
      });
    });
  });
});
