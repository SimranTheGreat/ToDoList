import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from './../store/store';
import { setMode } from '../store/Mode';

export default function Header() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  let title = 'TO-DO APP';
  if (mode === 'add') title = 'Add Task';
  if (mode === 'edit') title = 'Edit Task';

  const showBack = mode === 'add' || mode === 'edit';

  function handleBack() {
    dispatch(setMode({ mode: 'home' }));
    navigate('/home');
  }

  return (
    <header style={styles.header}>
      {showBack && (
        <button style={styles.backButton} onClick={handleBack}>
          ←
        </button>
      )}

      <h1 style={styles.title}>{title}</h1>
    </header>
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
    position: 'relative' as const,
  },

  backButton: {
    position: 'absolute' as const,
    left: '16px',
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '20px',
    cursor: 'pointer',
  },

  title: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    margin: 0,
    width: '100%',
    textAlign: 'center' as const,
  },
};
