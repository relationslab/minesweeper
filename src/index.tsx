import React from "react";
import ReactDOM from "react-dom";

import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById("root")
);
