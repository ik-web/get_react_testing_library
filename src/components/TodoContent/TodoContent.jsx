import React from 'react';

import './TodoContent.css';
import {
  CustomTitle,
  NewTodoInput,
  TodoList
} from 'components';

export const TodoContent = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="todoContent">
      <CustomTitle title="Todo" />
      <NewTodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
