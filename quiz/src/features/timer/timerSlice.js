import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    minutes: 1,
    seconds: 0,
    isTimerActive: false,
  },
  reducers: {
    setMinutes: (state, action) => {
      state.minutes = action.payload;
    },
    setSeconds: (state) => {
      state.seconds = state.minutes * 60;
    },
    setDecreaseSeconds: (state) => {
      state.seconds -= 1;
    },
    setInitialSeconds: (state) => {
      state.seconds = 0;
    },
    resetTimer: (state, action) => {
      state.isTimerActive = false;
    },
    setTimer: (state) => {
      state.isTimerActive = true;
    },
  },
});

export const {
    setMinutes,
    setSeconds,
    setDecreaseSeconds,
    setInitialSeconds,
    resetTimer,
    setTimer
} = timerSlice.actions;
export default timerSlice.reducer;
