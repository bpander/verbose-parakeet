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

export interface FilterState {
  visibility: VisibilityFilter;
}

const initialFilterState: FilterState = {
  visibility: VisibilityFilter.All,
};

export const filterReducer: Reducer<FilterState, VisibilityFilterAction> = (
  state = initialFilterState,
  action,
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibility: action.payload.filter };
    default:
      return state;
  }
};
