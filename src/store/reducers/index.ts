import { combineReducers } from 'redux';
import catReducer from './catReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  cats: catReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
