import { VisibilityFilter } from 'enums/VisibilityFilter';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actionTypes';
import { FSA } from 'models/FSA';

let nextTodoId = 0;

type AddTodoAction = FSA<typeof ADD_TODO, { id: number; text: string }>;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { id: nextTodoId++, text },
});

type SetVisibilityFilterAction = FSA<
  typeof SET_VISIBILITY_FILTER,
  { filter: VisibilityFilter }
>;

export const setVisibilityFilter = (filter: VisibilityFilter): SetVisibilityFilterAction => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});

type ToggleTodoAction = FSA<typeof TOGGLE_TODO, { id: number }>;

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO as typeof TOGGLE_TODO,
  payload: { id },
});

export type TodoAction =
  | AddTodoAction
  | SetVisibilityFilterAction
  | ToggleTodoAction;
