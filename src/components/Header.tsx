import { useSelector } from 'react-redux';
import type { RootState } from './../store/store';
export default function Header() {
  const mode = useSelector((state: RootState) => state.mode.mode);

  let title = 'TO-DO APP';
  if (mode === 'add') title = 'Add Task';
  if (mode === 'edit') title = 'Edit Task';
  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
      </header>
    </>
  );
}

const styles = {
  header: {
    width: '414px',
    height: '60px',
    backgroundColor: '#1e4fa3',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    opacity: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    margin: 0,
  },
};
