import { useEffect, useState } from 'react';
import { filterTasks } from '../utils/helper';

export function useTasks({ initialFilter }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(initialFilter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { tasks: filterTasks(tasks, filter), loading, filter, setFilter };
}
