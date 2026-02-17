import { useDispatch } from 'react-redux';
import type { Task } from '../store/Task';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../store/store';
import { deleteTask } from '../store/Task';
type Props = {
  task: Task;
  n: number;
};

export default function TaskTemplate(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.todoIcon}>{props.n + 1}</div>

        <div style={styles.textBlock}>
          <div style={styles.title}>{props.task.title}</div>
          <div style={styles.desc}>{props.task.desc}</div>
          <div style={styles.date}>
            {new Date(props.task.time).toDateString()}
          </div>
        </div>
      </div>

      <div style={styles.actions}>
        <button style={styles.iconButton} onClick={() => navigate('/Edit')}>
          ✏️
        </button>
        <button
          style={styles.iconButton}
          onClick={() => dispatch(deleteTask(props.task.id))}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '382px',
    minHeight: '113px',
    backgroundColor: '#F7F7F7',
    borderBottom: '1px solid #F3F6F9',
    boxSizing: 'border-box',
    padding: '16px',
    marginTop: '5px',
    marginBottom: '5px',
    position: 'relative',
  },

  row: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },

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
    flexShrink: 0,
  },

  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    maxWidth: '292px',
  },

  title: {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '14px',
    color: '#034EA2',
  },

  desc: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#231F20',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  date: {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
    color: '#7F7F7F',
    marginTop: '4px',
  },

  actions: {
    position: 'absolute',
    right: '16px',
    bottom: '16px',
    width: '72px',
    height: '34px',
    backgroundColor: '#F3F6F9',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
  },

  iconButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#034EA2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
