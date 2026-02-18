import { useNavigate } from 'react-router-dom';
import { setMode } from '../store/Mode';
import type { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { clearSelectedTask } from '../store/selectedTask';
export default function AddTask() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  return (
    <button
      style={styles.fab}
      onClick={() => {
        dispatch(setMode({ mode: 'add' }));
        dispatch(clearSelectedTask());

        navigate('/add-task');
      }}
    >
      +
    </button>
  );
}

const styles = {
  fab: {
    position: 'absolute' as const,
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#1e4fa3',
    color: '#ffffff',
    fontSize: '28px',
    border: 'none',
    cursor: 'pointer',
    bottom: '20px',
    right: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
};
