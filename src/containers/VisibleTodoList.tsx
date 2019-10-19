import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilter } from '../enums/VisibilityFilter'
import { TodosState } from 'reducers/todos'
import { RootState } from 'reducers/RootState'
import { Dispatch } from 'redux'

const getVisibleTodos = (todos: TodosState, filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.All:
      return todos
    case VisibilityFilter.Completed:
      return todos.filter(t => t.completed)
    case VisibilityFilter.Active:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
