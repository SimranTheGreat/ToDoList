import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'home',
  },
  reducers: {
    setMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});
export default modeSlice.reducer;
export const { setMode } = modeSlice.actions;
