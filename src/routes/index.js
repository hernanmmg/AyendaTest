import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumsPage from "../containers/Albums";
import Artists from "../containers/Artists";
import GenresPage from "../containers/Genres";
import Home from "../containers/HomePage";
import RandomSongPage from "../containers/RandomSong";
import SongsPage from "../containers/Songs";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/artists" component={Artists} />
    <Route exact path="/genres" component={GenresPage} />
    <Route exact path="/artists/:id/albums" component={AlbumsPage} />
    <Route exact path="/albums/:id/songs" component={SongsPage} />
    <Route
      exact
      path="/genres/:genre_name/random_song"
      component={RandomSongPage}
    />
  </Switch>
);

export default Routes;
