import { combineReducers, createStore } from "redux";
import boardReducer from "./reducers/Board";
import gameReducer from "./reducers/Game";
import userReducer from "./reducers/User";

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  game: gameReducer,
  board: boardReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
