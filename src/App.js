import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Back from "./components/Back";
import Layout from "./components/Layout";
import { history, store } from "./helpers";
import "./normalize.css";
import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Routes />
        <Back />
      </Layout>
    </Router>
  </Provider>
);

export default App;
