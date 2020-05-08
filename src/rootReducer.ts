import { combineReducers, createStore } from "redux";
import cellReducer from "./modules/Cell/Cell";

const rootReducer = combineReducers({
  cell: cellReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
