import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalOpen: false,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    }
  }
});


export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;