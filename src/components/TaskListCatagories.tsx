import { useState } from 'react';
import type { Task } from '../store/Task';
import TaskTemplate from './TaskTemplate';

type Props = {
  header: string;
  task: Task[];
};

export default function TaskListCatagories(props: Props) {
  const [showTasks, setShowTasks] = useState<boolean>(false);
  return (
    <div>
      <div style={styles.wrapper}>
        <div style={styles.bar}>
          <span style={styles.text}>
            {props.header} ({props.task.length})
          </span>
          <span style={styles.icon} onClick={() => setShowTasks(!showTasks)}>
            {' '}
            {showTasks ? '▴' : '▾'}
          </span>
        </div>
      </div>

      {showTasks && (
        <div>
          {props.task.map((task, i) => (
            <TaskTemplate key={task.id} task={task} n={i} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },

  bar: {
    width: '382px',
    height: '36px',
    backgroundColor: '#F3F6F9',
    border: '1px solid #F3F6F9',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    boxSizing: 'border-box' as const,
    cursor: 'pointer',
  },

  text: {
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#000000',
  },

  icon: {
    fontSize: '12px',
    color: '#000000',
  },
};
