import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Task = {
  id: number;
  time: number;
  title: string;
  desc: string;
  status: string;
};

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ title: string; desc: string }>) {
      const newTask = {
        id: state.tasks.length,
        title: action.payload.title,
        desc: action.payload.desc,
        status: 'Pending',
        time: Date.now(),
      };

      state.tasks.push(newTask);
    },

    editTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );

      if (index !== -1) {
        state.tasks[index] = {
          ...action.payload,
          time: Date.now(),
        };
      }
    },

    setStatus(state, action: PayloadAction<{ id: number; status: string }>) {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.status = action.payload.status;
      }
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, setStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
