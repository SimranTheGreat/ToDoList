import TaskListCatagories from './TaskListCatagories';
import type { Task } from '../store/Task';
type Props = {
  tasks: Task[];
};
export default function TaskList(props: Props) {
  const tasks = props.tasks;
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
