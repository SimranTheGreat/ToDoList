import type { Task } from '../store/Task';

type Props = {
  task: Task;
  n: number;
  key: number;
};

export default function TaskTemplate(props: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.todoIcon}>{props.n}</div>
    </div>
  );
}

const styles = {
  todoIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #034EA2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#034EA2',
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box' as const,
  },
  container: {
    width: '382px',
    height: '113px',
    backgroundColor: '#F7F7F7',
    borderBottom: '1px solid #F3F6F9',
    borderRadius: '3px',
    boxSizing: 'border-box' as const,
  },
};
