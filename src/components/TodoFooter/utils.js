export const calcIncompletedTasksNumber = (todos) => {
  let count = 0;

  todos.forEach((todo) => {
    if (!todo.completed) count++;
  });

  return count;
};
