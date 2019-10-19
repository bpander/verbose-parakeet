import { combineReducers, Reducer } from 'redux'

import { todosReducer } from './todos'
import { visibilityFilterReducer } from './visibilityFilter'
import { RootState } from './RootState';

export const rootReducer: Reducer<RootState> = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
