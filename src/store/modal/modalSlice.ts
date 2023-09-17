import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  veiwEditTagsModal: boolean;
  veiwAddTagsModal: boolean;
  veiwCreateNoteModal: boolean;
  veiwFiltersModal: boolean;
}

const initialState: ModalState = {
  veiwEditTagsModal: false,
  veiwAddTagsModal: false,
  veiwCreateNoteModal: false,
  veiwFiltersModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTagsModal: (state, action) => {
      const { type, view } = action.payload;
      if (type === "add") {
        state.veiwAddTagsModal = view;
      } else {
        state.veiwEditTagsModal = view;
      }
    },
    toggleCreateNoteModal: (state, action) => {
      state.veiwCreateNoteModal = action.payload;
    },
    toggleFiltersModal: (state, action) => {
      state.veiwFiltersModal = action.payload;
    },
  },
});

export const { toggleTagsModal, toggleCreateNoteModal, toggleFiltersModal } =
  modalSlice.actions;
export default modalSlice.reducer;
