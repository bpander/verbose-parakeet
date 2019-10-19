import { connect } from 'react-redux'
import { toggleTodo } from '../redux-modules/todos'
import TodoList from '../components/TodoList'
import { RootState } from 'redux-modules/RootState'
import { Dispatch } from 'redux'
import { getVisibleTodos } from 'redux-modules/todos'

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
