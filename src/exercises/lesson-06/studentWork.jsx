import ButtonFilterContent from './src/components/ButtonFilterContent';
import { getStudentName } from './src/utils/helper';
import { useTasks } from './src/hooks/useTasks';

export default function StudentWork() {
  const studentName = getStudentName();
  const { tasks, loading, filter, setFilter } = useTasks({
    initialFilter: 'all',
  });

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, {studentName}</h2>

      {/* #4: Repeated button JSX */}
      <div>
        <ButtonFilterContent value="all" label="All" onSelect={setFilter} />
        <ButtonFilterContent
          value="completed"
          label="Completed"
          onSelect={setFilter}
        />
        <ButtonFilterContent
          value="pending"
          label="Pending"
          onSelect={setFilter}
        />
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}
