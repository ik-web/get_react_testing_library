export const Todo = ({ todo, todoIndex }) => {
  return (
    <div
      key={todo.id}
      className={`todoItem ${todo.completed && 'todoItem_active'}`}
    >
      {todoIndex}. {todo.task}
    </div>
  );
};
