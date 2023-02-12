export const addNewTodo = (todo, setTodo, todos, setTodos) => {
  let updatedTodos = [
    ...todos,
    {
      id: Date.now(),
      task: todo,
      completed: false,
    },
  ];

  setTodos(updatedTodos);
  setTodo('');
};
