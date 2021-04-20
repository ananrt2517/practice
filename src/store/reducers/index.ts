import { combineReducers } from "redux";

import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;