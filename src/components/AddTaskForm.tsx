import { useNavigate } from 'react-router-dom';
import { setMode } from '../store/Mode';
import type { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask, editTask } from '../store/Task';
export default function AddTaskForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [title, setTittle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  function chgtitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTittle(event.target.value);
  }
  function chgdesc(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setDesc(event.target.value);
  }
  function add() {
    dispatch(
      addTask({
        title: title,
        desc: desc,
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
      <div style={styles.buttonRow}>
        <button
          style={styles.cancelBtn}
          onClick={() => {
            dispatch(setMode({ mode: 'home' }));
            navigate('/home');
          }}
        >
          Cancel
        </button>

        <button style={styles.addBtn} onClick={add}>
          ADD
        </button>
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
