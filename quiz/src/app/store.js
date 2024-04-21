import { configureStore } from "@reduxjs/toolkit";

import settingsSlice from "../features/settings/settingsSlice";
import modalSlice from "../features/modal/modalSlice";
import timerSlice from "../features/timer/timerSlice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    modal: modalSlice,
    timer: timerSlice,
  },
});
