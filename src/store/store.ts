import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Mode';
import taskReducer from './Task';
export const store = configureStore({
  reducer: {
    mode: modeReducer,
    task: taskReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
