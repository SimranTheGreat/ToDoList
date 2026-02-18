import { useDispatch } from 'react-redux';
import type { Task } from '../store/Task';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../store/store';
import { deleteTask } from '../store/Task';
import { setMode } from '../store/Mode';
import { setSelectedTask } from '../store/selectedTask';
import editIcon from './../assets/edit.png';
import deleteIcon from './../assets/bin.png';

type Props = {
  task: Task;
  n: number;
};

const statusColors: Record<string, string> = {
  Pending: '#BDBDBD',
  'In Progress': '#F2994A',
  Completed: '#27AE60',
};

export default function TaskTemplate(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.todoIcon}>{props.n + 1}</div>

        <div style={styles.textBlock}>
          <div style={styles.titleRow}>
            <div style={styles.title}>{props.task.title}</div>

            <div style={styles.status}>
              <span
                style={{
                  ...styles.statusDot,
                  backgroundColor: statusColors[props.task.status] || '#BDBDBD',
                }}
              />
              {props.task.status}
            </div>
          </div>

          <div style={styles.desc}>{props.task.desc}</div>

          <div style={styles.date}>
            {new Date(props.task.time).toDateString()}
          </div>
        </div>
      </div>

      <div style={styles.bottomRow}>
        <button
          //style={styles.iconButton}
          onClick={() => {
            dispatch(setMode({ mode: 'edit' }));
            dispatch(setSelectedTask(props.task));
            navigate('/Edit');
          }}
        >
          <img src={editIcon} alt="edit" style={styles.iconImg} />
        </button>

        <button
          //style={styles.iconButton}
          onClick={() => dispatch(deleteTask(props.task.id))}
        >
          <img src={deleteIcon} alt="delete" style={styles.iconImg} />
        </button>
      </div>
    </div>
  );
}
const styles: Record<string, React.CSSProperties> = {
  container: {
    width: '92%',
    backgroundColor: '#F7F7F7',
    borderBottom: '1px solid #F3F6F9',
    boxSizing: 'border-box',
    padding: '16px',
    marginTop: '8px',
    marginLeft: '15px',
    marginRight: '10px',
  },

  row: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },

  todoIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid #034EA2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#034EA2',
    backgroundColor: '#FFFFFF',
    flexShrink: 0,
  },

  textBlock: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontWeight: 600,
    fontSize: '14px',
    color: '#034EA2',
  },

  status: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#66676B',
  },

  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },

  desc: {
    fontSize: '12px',
    lineHeight: '16px',
    color: '#231F20',
  },

  date: {
    fontSize: '12px',
    color: '#7F7F7F',
    marginTop: '4px',
  },

  bottomRow: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
  },

  iconButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
