import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../../store/slices/todosSlice';

export const TodosList = ({ todos, remove, update }) => {
  const handleTodoChange = (id, isDone) => update(id, { isDone: !isDone });

  return (
    <ul>
      {todos.map(c => (
        <li key={c.id}>
          <input
            type='checkbox'
            checked={c.isDone}
            onChange={() => handleTodoChange(c.id, c.isDone)}
          />
          {JSON.stringify(c.task)}
          <button onClick={() => remove(c.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todosList }) => todosList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteTodo(id)),
  update: (id, updatedData) => dispatch(updateTodo({ id, updatedData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
