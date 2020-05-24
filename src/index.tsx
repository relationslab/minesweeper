import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./rootReducer";
import Modal from "./containers/Modal";

const Game = styled.div`
  min-width: 540px;
  min-height: 420px;
  display: grid;
  justify-content: center;
  margin: 60px;
`;

ReactDOM.render(
  <Provider store={store}>
    <Game>
      <Header />
      <Board />
    </Game>
    <Modal />
  </Provider>,
  document.getElementById("root")
);
