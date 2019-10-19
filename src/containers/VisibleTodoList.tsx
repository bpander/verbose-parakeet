import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { RootState } from 'reducers/RootState'
import { Dispatch } from 'redux'
import { getVisibleTodos } from 'selectors'

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.visibilityFilter)(state.todos),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
