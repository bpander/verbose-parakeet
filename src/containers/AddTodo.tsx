import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux-modules/todo';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'redux-modules/RootState';

interface AddTodoProps {
  dispatch: ThunkDispatch<RootState, {}, AnyAction>;
}

const AddTodo: React.FC<AddTodoProps> = ({ dispatch }) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.current || !input.current.value.trim()) {
          return;
        }
        dispatch(addTodo(input.current.value));
        input.current.value = '';
      }}>
        <input ref={input} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
