import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Mode';
import taskReducer from './Task';
import selectedTaskReducer from './selectedTask';

const loadSelectedTask = () => {
  try {
    const stored = localStorage.getItem('selectedTask');
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    task: taskReducer,
    selectedTask: selectedTaskReducer,
  },
  preloadedState: {
    selectedTask: {
      task: loadSelectedTask(),
    },
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem('tasks', JSON.stringify(state.task.tasks));

  localStorage.setItem('selectedTask', JSON.stringify(state.selectedTask.task));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
