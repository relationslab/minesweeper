import React from "react";
import ReactDOM from "react-dom";

import Board from "./containers/Board";
import SelectLevel from "./containers/SelectLevel";
import Timer from "./containers/Timer";
import { Provider } from "react-redux";
import store from "./rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <Timer />
    <SelectLevel />
    <Board />
  </Provider>,
  document.getElementById("root")
);
