import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { RootState, RootDispatch } from 'redux-modules/RootState'
import { getVisibleTodos, toggleTodo } from 'redux-modules/todo'

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.filter.visibility)(state.todo),
});

const mapDispatchToProps = (dispatch: RootDispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
