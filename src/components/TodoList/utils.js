export const updateTask = (id, todos, setTodos) => {
  let updatedTasks = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });

  setTodos(updatedTasks);
};
