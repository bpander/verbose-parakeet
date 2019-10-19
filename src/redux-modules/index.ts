import { combineReducers, Reducer } from 'redux';

import { todoReducer } from './todo';
import { filterReducer } from './filter';
import { RootState } from './RootState';

export const rootReducer: Reducer<RootState> = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
