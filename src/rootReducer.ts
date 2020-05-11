import { combineReducers, createStore } from "redux";
import boardReducer from "./reducers/Board/board";

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  board: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, storeEnhancers());

export default store;
