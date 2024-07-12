import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalName: null,
  data: null,
};

export const modalSlice = createSlice({
  name: "lsmodal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.modalName;
      state.data = action.payload.data ? action.payload.data : null;
    },
    closeModal: (state) => {
      state.modalName = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
