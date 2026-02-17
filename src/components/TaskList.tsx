import { useSelector } from 'react-redux';
import TaskListCatagories from './TaskListCatagories';
import type { RootState } from '../store/store';

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const pending = tasks.filter((t) => t.status === 'Pending');
  const completed = tasks.filter((t) => t.status === 'Completed');
  const inProgress = tasks.filter((t) => t.status === 'In Progress');

  return (
    <div style={styles.container}>
      <TaskListCatagories header="In Progress" task={inProgress} />
      <TaskListCatagories header="Pending" task={pending} />
      <TaskListCatagories header="Completed" task={completed} />
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '414px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
  },
};
