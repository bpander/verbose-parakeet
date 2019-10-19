import { FSA } from 'models/FSA';
import { Todo } from 'models/Todo';
import { Reducer } from 'redux';
import { VisibilityFilter } from 'enums/VisibilityFilter';

let nextTodoId = 0;

const ADD_TODO = 'ADD_TODO';

type AddTodoAction = FSA<typeof ADD_TODO, { id: number; text: string }>;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { id: nextTodoId++, text },
});

const TOGGLE_TODO = 'TOGGLE_TODO';

type ToggleTodoAction = FSA<typeof TOGGLE_TODO, { id: number }>;

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO as typeof TOGGLE_TODO,
  payload: { id },
});

export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction;

export type TodoState = {
  items: Todo[];
}

const initialTodoState: TodoState = {
  items: [],
};

export const todoReducer: Reducer<TodoState, TodoAction> = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          (todo.id === action.payload.id)
            ? {...todo, completed: !todo.completed}
            : todo
        ),
      };
    default:
      return state;
  }
}

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
