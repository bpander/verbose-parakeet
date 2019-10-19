import { TodosState } from './todos';
import { VisibilityFilterState } from './visibilityFilter';

export interface RootState {
  todos: TodosState;
  visibilityFilter: VisibilityFilterState;
}
