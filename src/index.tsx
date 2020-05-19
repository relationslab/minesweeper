import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Board />
  </Provider>,
  document.getElementById("root")
);
