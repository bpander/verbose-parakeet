import { TodoState } from './todo';
import { FilterState } from './filter';

export interface RootState {
  todo: TodoState;
  filter: FilterState;
}
