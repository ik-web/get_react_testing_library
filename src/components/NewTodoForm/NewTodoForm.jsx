import React from 'react';

import './NewTodoForm.css';
import { addNewTodo } from './utils';

export const NewTodoInput = ({ setTodos, todos }) => {
  const [todo, setTodo] = React.useState('');

  const handleButtonClick = () => {
    const handledTodo = todo.trim();

    if (handledTodo) {
      addNewTodo(handledTodo, setTodo, todos, setTodos);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <form className="newTodoForm" onSubmit={handleSubmit}>
      <input
        className="newTodoForm__input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="newTodoForm__button" onClick={handleButtonClick}>
        Add
      </button>
    </form>
  );
};
