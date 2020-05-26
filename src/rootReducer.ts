import { combineReducers, createStore } from "redux";
import boardReducer from "./reducers/Board";
import gameReducer from "./reducers/Game";

// const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  board: boardReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
