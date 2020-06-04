import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./rootReducer";
import Game from "./containers/Game";
import Ranking from "./containers/Ranking";
import PageHeader from "./components/Header";
import Sound from "./components/Sound";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    color:white;
    box-sizing:border-box;
  }
  a {
    color:white;
    text-decoration:none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style:none;
  }
  input {
    appearance: none;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  button {
    background-color:transparent;
    appearance: none;
    border:none;
    outline:none;
    padding: 0;
    cursor: pointer;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Sound />
    <Router>
      <PageHeader />
      <Route exact path="/" component={Game} />
      <Route path="/ranking/:category" component={Ranking} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
