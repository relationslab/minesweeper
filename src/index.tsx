import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./rootReducer";
import Home from "./components/Home";
import Game from "./components/Game";
import Ranking from "./components/Ranking";
import PageHeader from "./components/PageHeader";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    color:white;
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Grid>
        <PageHeader />
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Game} />
        <Route path="/ranking" component={Ranking} />
      </Grid>
    </Router>
  </Provider>,
  document.getElementById("root")
);
