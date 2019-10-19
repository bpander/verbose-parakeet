import { VisibilityFilter } from 'enums/VisibilityFilter';
import { createReducer } from 'lib/createReducer';

export interface FilterState {
  visibility: VisibilityFilter;
}

const initialFilterState: FilterState = {
  visibility: VisibilityFilter.All,
};

const { reducer, update } = createReducer('filter/UPDATE', initialFilterState);
export const filterReducer = reducer;

export const setVisibilityFilter = (visibility: VisibilityFilter) => update({ visibility });
