import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Mode';
import taskReducer from './Task';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    task: taskReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.task.tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
