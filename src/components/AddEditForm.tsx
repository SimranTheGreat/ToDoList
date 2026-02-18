import { useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTask, editTask } from '../store/Task';
import StatusDropdown from './StatusDropdown';

export default function AddEditForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const selectedTask = useSelector(
    (state: RootState) => state.selectedTask.task,
  );

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [desc, setDesc] = useState('');

  /* ---- Sync local form state with selectedTask ---- */
  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setStatus(selectedTask.status);
      setDesc(selectedTask.desc);
    } else {
      setTitle('');
      setStatus('');
      setDesc('');
    }
  }, [selectedTask]);

  function chgtitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function chgdesc(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDesc(event.target.value);
  }

  function add() {
    dispatch(
      addTask({
        title,
        desc,
      }),
    );
    navigate('/home');
  }

  function update() {
    if (!selectedTask) return;

    dispatch(
      editTask({
        id: selectedTask.id,
        title,
        desc,
        status,
        time: selectedTask.time,
      }),
    );

    navigate('/home');
  }

  return (
    <div style={styles.container}>
      <input
        placeholder="Enter the title"
        style={styles.text}
        value={title}
        onChange={chgtitle}
      />

      <textarea
        placeholder="Enter the description"
        style={styles.description}
        value={desc}
        onChange={chgdesc}
      />

      {selectedTask && <StatusDropdown value={status} onChange={setStatus} />}

      <div style={styles.buttonRow}>
        <button style={styles.cancelBtn} onClick={() => navigate('/home')}>
          Cancel
        </button>

        {selectedTask ? (
          <button style={styles.addBtn} onClick={update}>
            Update
          </button>
        ) : (
          <button style={styles.addBtn} onClick={add}>
            ADD
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '366px',
    marginTop: '24px',
    marginLeft: '24px',
  },
  text: {
    width: '366px',
    height: '30px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '3px',
    padding: '0 10px',
    fontSize: '12px',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    lineHeight: '12px',
    color: '#66676B',
    outline: 'none',
    boxSizing: 'border-box' as const,
    marginBottom: '16px',
  },
  description: {
    width: '366px',
    height: '71px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '3px',
    padding: '8px 10px',
    fontSize: '12px',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    lineHeight: '12px',
    color: '#66676B',
    resize: 'none' as const,
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  buttonRow: {
    width: '366px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '24px',
  },
  cancelBtn: {
    width: '110px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #034EA2',
    borderRadius: '5px',
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#034EA2',
    cursor: 'pointer',
  },
  addBtn: {
    width: '110px',
    height: '40px',
    backgroundColor: '#034EA2',
    border: 'none',
    borderRadius: '5px',
    fontFamily: 'Jost, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#FFFFFF',
    cursor: 'pointer',
  },
};
