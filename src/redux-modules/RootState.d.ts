import { TodoState } from './todo';
import { FilterState } from './filter';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export interface RootState {
  todo: TodoState;
  filter: FilterState;
}

export type RootThunk<R> = ThunkAction<R, RootState, {}, AnyAction>;

export type RootDispatch = ThunkDispatch<RootState, {}, AnyAction>;
