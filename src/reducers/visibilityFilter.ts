import { Reducer } from 'redux';

import { VisibilityFilter } from 'enums/VisibilityFilter';

export type VisibilityFilterState = VisibilityFilter;

export const visibilityFilterReducer: Reducer<VisibilityFilter> = (state = VisibilityFilter.All, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
