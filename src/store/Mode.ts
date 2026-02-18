import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ModeState = {
  mode: string;
};

const loadMode = (): ModeState => {
  try {
    const stored = localStorage.getItem('mode');
    if (!stored) return { mode: 'home' };

    return { mode: stored };
  } catch {
    return { mode: 'home' };
  }
};

const initialState: ModeState = loadMode();

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<{ mode: string }>) {
      state.mode = action.payload.mode;

      try {
        localStorage.setItem('mode', action.payload.mode);
      } catch {}
    },
  },
});

export default modeSlice.reducer;
export const { setMode } = modeSlice.actions;
