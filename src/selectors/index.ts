import { VisibilityFilter } from 'enums/VisibilityFilter'
import { TodosState } from 'reducers/todos';

export const getVisibleTodos = (filter: VisibilityFilter) => (todos: TodosState) => {
  switch (filter) {
    case VisibilityFilter.All:
      return todos;
    case VisibilityFilter.Completed:
      return todos.filter(t => t.completed);
    case VisibilityFilter.Active:
      return todos.filter(t => !t.completed);
  }
};
