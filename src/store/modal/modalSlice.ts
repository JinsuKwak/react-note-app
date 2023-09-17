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
  reducers: {},
});

export default modalSlice.reducer;
