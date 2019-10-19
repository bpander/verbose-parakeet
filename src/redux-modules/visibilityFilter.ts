import { FSA } from 'models/FSA';
import { VisibilityFilter } from 'enums/VisibilityFilter';
import { Reducer } from 'redux';

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

type SetVisibilityFilterAction = FSA<
  typeof SET_VISIBILITY_FILTER,
  { filter: VisibilityFilter }
>;

export const setVisibilityFilter = (filter: VisibilityFilter): SetVisibilityFilterAction => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter },
});

export type VisibilityFilterAction = SetVisibilityFilterAction;

export type VisibilityFilterState = VisibilityFilter;

export const visibilityFilterReducer: Reducer<VisibilityFilter, VisibilityFilterAction> = (
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
