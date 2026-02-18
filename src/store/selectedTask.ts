import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from './Task';

type SelectedTaskState = {
  task: Task | null;
};

const initialState: SelectedTaskState = {
  task: null,
};

const selectedTaskSlice = createSlice({
  name: 'selectedTask',
  initialState,
  reducers: {
    setSelectedTask(state, action: PayloadAction<Task>) {
      state.task = action.payload;
    },
    clearSelectedTask(state) {
      state.task = null;
    },
  },
});

export const { setSelectedTask, clearSelectedTask } = selectedTaskSlice.actions;

export default selectedTaskSlice.reducer;
