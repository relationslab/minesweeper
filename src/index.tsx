import React from "react";
import ReactDOM from "react-dom";

import Board from "./containers/Board";
import SelectLevel from "./containers/SelectLevel";
import Timer from "./containers/Timer";
import FlagCount from "./containers/FlagCount";
import { Provider } from "react-redux";
import store from "./rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <FlagCount />
    <Timer />
    <SelectLevel />
    <Board />
  </Provider>,
  document.getElementById("root")
);
