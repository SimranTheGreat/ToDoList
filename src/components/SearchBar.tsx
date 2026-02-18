import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useState } from 'react';
import TaskList from './TaskList';

export default function SearchBar() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((task) => {
    const q = search.toLowerCase();

    return (
      task.title.toLowerCase().includes(q) ||
      task.desc.toLowerCase().includes(q) ||
      task.status.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.inputContainer}>
          <span style={styles.icon}>🔍</span>

          <input
            type="text"
            placeholder="Search To-Do by title, description or status"
            style={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button style={styles.clearButton} onClick={() => setSearch('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      <TaskList tasks={filteredTasks} />
    </>
  );
}
const styles = {
  wrapper: {
    padding: '0 16px',
    marginTop: '16px',
  },

  inputContainer: {
    position: 'relative' as const,
  },

  icon: {
    position: 'absolute' as const,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#667085',
  },

  input: {
    width: '100%',
    height: '40px',
    borderRadius: '6px',
    border: '1px solid #d0d5dd',
    padding: '0 36px 0 36px', // space for icon + clear
    fontSize: '14px',
    outline: 'none',
  },

  clearButton: {
    position: 'absolute' as const,
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    color: '#667085',
  },
};
