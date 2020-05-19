import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./rootReducer";
import Modal from "./containers/Modal";

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Board />
    <Modal />
  </Provider>,
  document.getElementById("root")
);
