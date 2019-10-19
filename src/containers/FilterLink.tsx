import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { RootState } from 'reducers/RootState'
import { VisibilityFilter } from 'enums/VisibilityFilter'

interface FilterLinkProps {
  filter: VisibilityFilter;
  children?: React.ReactNode;
}

export default connect(
  (state: RootState, ownProps: FilterLinkProps) => ({
    active: ownProps.filter === state.visibilityFilter
  }),
  (dispatch, ownProps: FilterLinkProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
)(Link)
