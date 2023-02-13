import './Todo.css';

export const Todo = ({ todo, todoIndex }) => {
  const todoText = `${todoIndex}. ${todo.task}`;
  return (
    <div
      key={todo.id}
      className={`todoItem ${todo.completed && 'todoItem_active'}`}
    >
      {todoText}
    </div>
  );
};
