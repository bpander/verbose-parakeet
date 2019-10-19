import { Reducer } from 'redux';

import { VisibilityFilter } from 'enums/VisibilityFilter';
import { SET_VISIBILITY_FILTER } from 'constants/actionTypes';
import { TodoAction } from 'actions';

export type VisibilityFilterState = VisibilityFilter;

export const visibilityFilterReducer: Reducer<VisibilityFilter, TodoAction> = (
  state = VisibilityFilter.All,
  action,
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
