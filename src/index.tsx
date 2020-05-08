import React from "react";
import ReactDOM from "react-dom";

import Cell from "./containers/Cell";
import { Provider } from "react-redux";
import store from "./rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <Cell />
  </Provider>,
  document.getElementById("root")
);
