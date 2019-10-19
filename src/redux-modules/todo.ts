import { Todo } from 'models/Todo';
import { VisibilityFilter } from 'enums/VisibilityFilter';
import { RootThunk } from './RootState';
import { createReducer } from 'lib/createReducer';

let nextTodoId = 0;

export type TodoState = {
  items: Todo[];
}

const initialTodoState: TodoState = {
  items: [],
};

const { reducer, update } = createReducer('todos/UPDATE', initialTodoState);
export const todoReducer = reducer;

export const addTodo = (text: string): RootThunk<void> => (dispatch, getState) => {
  const items: Todo[] = [
    ...getState().todo.items,
    { id: nextTodoId++, text, completed: false },
  ];
  dispatch(update({ items }));
};

export const toggleTodo = (id: number): RootThunk<void> => (dispatch, getState) => {
  const items = getState().todo.items.map(todo =>
    (todo.id === id)
      ? { ...todo, completed: !todo.completed }
      : todo
  );
  dispatch(update({ items }));
};

export const getVisibleTodos = (filter: VisibilityFilter) => (todo: TodoState) => {
  switch (filter) {
    case VisibilityFilter.All:
      return todo.items;
    case VisibilityFilter.Completed:
      return todo.items.filter(t => t.completed);
    case VisibilityFilter.Active:
      return todo.items.filter(t => !t.completed);
  }
};
