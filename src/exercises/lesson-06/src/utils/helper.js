/**
 * Accepts the task list and filter value
 * Returns the filtered tasks
 * Contains no React code
 */
export function filterTasks(tasks, filter) {
  let visibleTasks = tasks;
  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  return visibleTasks;
}
