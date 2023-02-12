import './TodoList.css';
import { updateTask } from './utils';
import { Todo, TodoFooter } from 'components';

export const TodoList = ({ todos, setTodos }) => {
  const handleTodoClick = (id) => updateTask(id, todos, setTodos);

  return (
    <div className="todoListContainer">
      <div className="todosContainer">
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id} onClick={() => handleTodoClick(todo.id)}>
              <Todo todo={todo} todoIndex={index + 1} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <TodoFooter todos={todos} />
      </div>
    </div>
  );
};
